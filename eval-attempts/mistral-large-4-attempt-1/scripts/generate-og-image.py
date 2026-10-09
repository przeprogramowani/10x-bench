#!/usr/bin/env python3
"""Generate the Open Graph image (1200x630) for przeprogramowani.pl."""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630

# Diagonal gradient: slate-950 -> indigo-950 -> violet-900 -> violet-600 -> orange-600
stops = [
    (11, 11, 22),      # 0b0b16
    (30, 27, 75),      # 1e1b4b
    (76, 29, 149),     # 4c1d95
    (124, 58, 237),    # 7c3aed
    (234, 88, 12),     # ea580c
]

img = Image.new("RGB", (W, H))
px = img.load()
# gradient along the diagonal (x + y direction)
diag = W + H
for y in range(H):
    for x in range(W):
        t = (x + y) / diag
        pos = t * (len(stops) - 1)
        i = min(int(pos), len(stops) - 2)
        frac = pos - i
        c0, c1 = stops[i], stops[i + 1]
        px[x, y] = tuple(round(c0[k] + (c1[k] - c0[k]) * frac) for k in range(3))

# Soft dark vignette on the left for text readability
overlay = Image.new("RGB", (W, H), (0, 0, 0))
mask = Image.new("L", (W, H))
mask_px = mask.load()
for y in range(H):
    for x in range(W):
        mask_px[x, y] = int(120 * max(0.0, 1.0 - x / (W * 0.55)))
img = Image.composite(img, Image.new("RGB", (W, H), (11, 11, 22)), mask)

draw = ImageDraw.Draw(img)

font_bold = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
font_reg = "/System/Library/Fonts/Supplemental/Arial.ttf"

title_font = ImageFont.truetype(font_bold, 92)
sub_font = ImageFont.truetype(font_reg, 40)
badge_font = ImageFont.truetype(font_bold, 26)

title = "Przeprogramowani"
subtitle = "Szersze spojrzenie na programowanie"

tb = draw.textbbox((0, 0), title, font=title_font)
sb = draw.textbbox((0, 0), subtitle, font=sub_font)

cx = W // 2
draw.text((cx - (tb[2] - tb[0]) // 2, H // 2 - 70), title, font=title_font, fill=(255, 255, 255))
draw.text((cx - (sb[2] - sb[0]) // 2, H // 2 + 45), subtitle, font=sub_font, fill=(196, 181, 253))

badge = "PODCASTY  ·  KURSY  ·  YOUTUBE  ·  NEWSLETTER"
bb = draw.textbbox((0, 0), badge, font=badge_font)
draw.rounded_rectangle(
    [cx - (bb[2] - bb[0]) // 2 - 24, 96, cx + (bb[2] - bb[0]) // 2 + 24, 96 + 52],
    radius=26,
    fill=(124, 58, 237),
)
draw.text((cx - (bb[2] - bb[0]) // 2, 108), badge, font=badge_font, fill=(255, 255, 255))

img.save("public/og-image.png", optimize=True)
print("OG image written: public/og-image.png", img.size)
