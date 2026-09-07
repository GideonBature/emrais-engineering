#!/usr/bin/env python3
"""Check larger images from the docx that are likely construction/project photos."""
from PIL import Image
import os

MEDIA_DIR = "/home/z/my-project/extracted/docx_contents/word/media"

# Check the larger JPEGs (likely real photos, not document scans)
candidates = []
for f in sorted(os.listdir(MEDIA_DIR)):
    if f.endswith('.jpeg'):
        path = os.path.join(MEDIA_DIR, f)
        size = os.path.getsize(path)
        if size > 100000:  # > 100KB likely real photos
            candidates.append((f, size))

candidates.sort(key=lambda x: x[1], reverse=True)
print(f"Found {len(candidates)} large JPEG images\n")

for fname, size in candidates[:30]:
    path = os.path.join(MEDIA_DIR, fname)
    try:
        img = Image.open(path)
        w, h = img.size
        ratio = w/h
        # Good for hero if landscape and reasonable dimensions
        landscape = w > h
        print(f"{fname}: {w}x{h} ratio={ratio:.2f} {'LANDSCAPE' if landscape else 'portrait'} size={size//1024}KB")
    except Exception as e:
        print(f"{fname}: error {e}")
