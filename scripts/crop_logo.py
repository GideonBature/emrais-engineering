#!/usr/bin/env python3
"""Crop the EMRAIS logo from image1.jpeg and extract brand colors."""
from PIL import Image
import os

IMG_PATH = "/home/z/my-project/extracted/docx_contents/word/media/image1.jpeg"
OUTPUT_DIR = "/home/z/my-project/download"
os.makedirs(OUTPUT_DIR, exist_ok=True)

img = Image.open(IMG_PATH)
w, h = img.size
print(f"Original image size: {w}x{h}")

# Logo is in upper-left area (approx: top 5%, bottom 23%, left 12%, right 42%)
# Expand slightly to capture full logo
left = int(w * 0.08)
right = int(w * 0.46)
top = int(h * 0.03)
bottom = int(h * 0.26)

logo_crop = img.crop((left, top, right, bottom))
print(f"Logo crop size: {logo_crop.size}")

# Save as PNG
logo_path = os.path.join(OUTPUT_DIR, "emrais-logo.png")
logo_crop.save(logo_path, "PNG")
print(f"Logo saved to: {logo_path}")

# Also save a square version for favicon
size = min(logo_crop.size)
# Center crop to square
left_s = (logo_crop.size[0] - size) // 2
top_s = (logo_crop.size[1] - size) // 2
square = logo_crop.crop((left_s, top_s, left_s + size, top_s + size))
favicon_path = os.path.join(OUTPUT_DIR, "emrais-favicon.png")
square.save(favicon_path, "PNG")
print(f"Favicon saved to: {favicon_path}")

# Extract dominant colors from the logo
img_rgba = logo_crop.convert('RGBA').resize((100, 100))
colors = img_rgba.getcolors(10000)
if colors:
    colors.sort(reverse=True)
    print("\n=== TOP 10 COLORS IN LOGO ===")
    for count, color in colors[:10]:
        hex_color = '#{:02x}{:02x}{:02x}'.format(color[0], color[1], color[2])
        print(f"  {hex_color} (count: {count}, alpha: {color[3]})")
