#!/usr/bin/env python3
"""Extract text content and identify logo from the Emrais company profile docx."""
import zipfile
import xml.etree.ElementTree as ET
import os
import json
from pathlib import Path

DOCX_PATH = "/home/z/my-project/upload/Emrais Company Profile 2026.docx"
EXTRACT_DIR = "/home/z/my-project/extracted/docx_contents"
OUTPUT_DIR = "/home/z/my-project/extracted"

# Extract text from document.xml
def extract_text():
    ns = {
        'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
        'r': 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
        'a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
        'wp': 'http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing',
    }
    
    doc_xml = os.path.join(EXTRACT_DIR, "word", "document.xml")
    tree = ET.parse(doc_xml)
    root = tree.getroot()
    
    # Get relationship mappings
    rels_xml = os.path.join(EXTRACT_DIR, "word", "_rels", "document.xml.rels")
    rels_tree = ET.parse(rels_xml)
    rels_root = rels_tree.getroot()
    
    rels = {}
    for rel in rels_root:
        rid = rel.get('Id')
        target = rel.get('Target')
        rels[rid] = target
    
    paragraphs = []
    for para in root.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
        texts = []
        images = []
        for run in para.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}r'):
            for t in run.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t'):
                if t.text:
                    texts.append(t.text)
        # Check for images
        for blip in para.iter('{http://schemas.openxmlformats.org/drawingml/2006/main}blip'):
            embed = blip.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed')
            if embed and embed in rels:
                images.append(rels[embed])
        
        text = ''.join(texts).strip()
        if text or images:
            paragraphs.append({'text': text, 'images': images})
    
    return paragraphs

paragraphs = extract_text()

# Save full text
full_text = []
for p in paragraphs:
    if p['images']:
        for img in p['images']:
            full_text.append(f"[IMAGE: {img}]")
    if p['text']:
        full_text.append(p['text'])

with open(os.path.join(OUTPUT_DIR, "full_text.txt"), "w", encoding="utf-8") as f:
    f.write('\n'.join(full_text))

print(f"Extracted {len(paragraphs)} paragraphs")
print(f"Full text saved to {OUTPUT_DIR}/full_text.txt")
print(f"\n=== FIRST 200 LINES OF TEXT ===")
for line in full_text[:200]:
    print(line)
