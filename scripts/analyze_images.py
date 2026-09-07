#!/usr/bin/env python3
"""Analyze images to find the logo - look at first images and PNGs with reasonable sizes."""
from PIL import Image
import os

MEDIA_DIR = "/home/z/my-project/extracted/docx_contents/word/media"
LOGO_DIR = "/home/z/my-project/extracted/logo_candidates"
os.makedirs(LOGO_DIR, exist_ok=True)

# Check first 30 images + larger PNGs
candidates = []
for i in range(1, 31):
    for ext in ['.png', '.jpeg']:
        path = os.path.join(MEDIA_DIR, f"image{i}{ext}")
        if os.path.exists(path):
            candidates.append(path)

# Also check large PNGs which could be logos/charts
for f in sorted(os.listdir(MEDIA_DIR)):
    path = os.path.join(MEDIA_DIR, f)
    size = os.path.getsize(path)
    if f.endswith('.png') and size > 50000:
        if path not in candidates:
            candidates.append(path)

print("=== IMAGE ANALYSIS ===")
for path in candidates[:40]:
    try:
        img = Image.open(path)
        w, h = img.size
        mode = img.mode
        fsize = os.path.getsize(path)
        fname = os.path.basename(path)
        
        # Check if it has transparency (logos often do)
        has_alpha = 'A' in mode or 'transparency' in img.info
        
        # Get dominant colors
        img_small = img.convert('RGBA').resize((50, 50))
        colors = img_small.getcolors(2500)
        if colors:
            colors.sort(reverse=True)
            top_colors = colors[:3]
        else:
            top_colors = []
        
        print(f"{fname}: {w}x{h} {mode} alpha={has_alpha} size={fsize//1024}KB")
        print(f"  Top colors: {[(c[0], c[1]) for c in top_colors[:3]]}")
        
        # Copy small/likely logo images
        if fsize < 500000 and (has_alpha or (w < 800 and h < 800)):
            import shutil
            dst = os.path.join(LOGO_DIR, fname)
            shutil.copy2(path, dst)
    except Exception as e:
        print(f"Error with {path}: {e}")
