# Figma Frame Links & Reading Instructions

---

## How to Read Each Frame
For every frame listed below, read ALL of the following from Figma MCP local server using get_nodes or get_file_nodes:

- Layout & spacing — exact positions, padding, margin, gap, alignment
- Layer names — use as class names and image filenames
- Layer hierarchy — parent > child order must match in HTML DOM
- Colors & gradients — exact hex/rgba values
- Typography — font family, size, weight, letter spacing, line height
- Images — read layer name, map to /assets/images/[layer-name].png
- Prototypes & interactions — every click, tap, hover action defined in Figma
- Navigation targets — which frame or page each interaction leads to
- Animations & transitions — type (instant, dissolve, slide, push etc), duration, easing
- Overlays — position, backdrop, close behavior
- Scroll behavior — fixed, sticky, overflow settings
- Component states — default, hover, pressed, disabled
- Variants — read all variant properties for each component
- Auto layout — direction, spacing, padding, fill/hug/fixed sizing
- Constraints — how layers scale or pin relative to parent

---

## Frame Index

### Correction (2026-09-08)
Row 3 below originally pointed to `KT4dkzEVW0He32Hpl6qB5l/9-Types-of-Punya-Bandh?node-id=17-666`
— a different Figma file, unrelated to this "Politeness" project (it's the old Punya Bandh design
that the previous, now-replaced index.html/index.md in this folder were built from). Confirmed
with the user as a leftover mistake and dropped from the build. index.html is built from Frame 1
+ Frame 2 only (both from the Politeness file). See index.md's "Rebuild note" for detail.

## index.html
| Frame | Node ID | Figma Link | Status |
|-------|---------|------------|--------|
| Frame 1 — splash (Enter screen) | node-id=173-4447 | [https://www.figma.com/design/WiTtuOZcXGRlBabEhMj0kF/Politeness?node-id=173-4447&m=dev] | built |
| Frame 2 — settled (topic cards) | node-id=173-4473 | [https://www.figma.com/design/WiTtuOZcXGRlBabEhMj0kF/Politeness?node-id=173-4473&m=dev] | built |
| ~~home~~ (dropped, wrong file) | ~~node-id=17-666~~ | ~~https://www.figma.com/design/KT4dkzEVW0He32Hpl6qB5l/9-Types-of-Punya-Bandh?node-id=17-666&m=dev~~ | dropped — see Correction above |


## politeness.html
One page, one internal image+caption slider — these 3 frames are the same page captured at its
3 slider positions, not 3 separate pages/frames (see politeness.md's Source frames note).

| Frame | Node ID | Figma Link | Status |
|-------|---------|------------|--------|
| slide 1 (grandma + girl) | node-id=173-4915 | [https://www.figma.com/design/WiTtuOZcXGRlBabEhMj0kF/Politeness?node-id=173-4915&m=dev] | built |
| slide 2 (classroom) | node-id=173-7644 | [https://www.figma.com/design/WiTtuOZcXGRlBabEhMj0kF/Politeness?node-id=173-7644&m=dev] | built |
| slide 3 (bus seat) | node-id=173-7712 | [https://www.figma.com/design/WiTtuOZcXGRlBabEhMj0kF/Politeness?node-id=173-7712&m=dev] | built |

  

---






## Prototype & Interaction Map
> Fill this after reading Figma. Claude will use this to wire up click events and navigation.
> Note: no explicit Figma prototype/interaction data was present on either index.html frame
> (no reactions/connections read via MCP) — everything below is inferred from the visual design
> + the "Enter button becomes topic list" pattern already used elsewhere in this repo (see old
> index.md's Punya Bandh precedent). Flagged in index.md's Open items for designer confirmation.

| Page | Layer Name | Interaction | Target Frame / Page | Animation |
|------|------------|-------------|----------------------|-----------|
| index.html | Enter button | on click | #section-topics (same page) | shrink/rise (mascot, titlebar), cards slide up from bottom, 0.5–0.6s |
| index.html | home icon (topics) | on click | ./index.html (real navigation) | — |
| index.html | topic card 1 | on click | politeness.html | — |
| index.html | topic card 2–6 | on click | placeholder `href="#"` — pages not yet built | — |
| index.html | topic card 1–6 | on hover | — | un-rotate + scale 1.05, 0.35s (added affordance, not a literal Figma spec) |
| politeness.html | home icon | on click | ./index.html (real navigation) | — |
| politeness.html | prev/next arrows | on click | previous/next slide (main image slider) | Swiper default, 0.5s |
| politeness.html | side-nav badge 1 | on click | politeness.html (self) | — |
| politeness.html | side-nav badge 2–6 | on click | placeholder `href="#"` — pages not yet built | — |
| politeness.html | side-nav badge 1–6 | on hover | reveals the label pill (inferred, not a recorded Figma prototype — see politeness.md 3.5.7) | slide via transform, 0.3s |

---

## Synced Sliders
> Fill when a page has two sliders that move together.

| Page | Main Slider Layer | Synced Slider Layer | Effect | Node IDs per Slide |
|------|-------------------|---------------------|--------|--------------------|
| politeness.html | #mainSwiper (content-card image) | #captionSwiper (caption text) | fade | node-id=173-4915 (slide 1), node-id=173-7644 (slide 2), node-id=173-7712 (slide 3) |

---

## Overlay Map
> Fill when a frame opens as an overlay on top of another.

| Page | Trigger Layer | Overlay Frame | Position | Close on backdrop |
|------|---------------|---------------|----------|-------------------|
| [page].html | [layer-name] | Frame N | center / top / bottom | yes / no |

---

## Image Map
> Claude fills this after reading all frames via Figma MCP.

| Page | Layer Name | Image Path | Notes |
|------|------------|------------|-------|
| index.html | star | /assets/images/figma-star.png | found (downloaded from Figma) |
| index.html | character (4 kids) | /assets/images/figma-character.png | found (downloaded from Figma) |
| index.html | cloudleft / cloudright | /assets/images/figma-cloudleft.png | found (downloaded from Figma, reused for both) |
| index.html | bg 1Asset 7 (blobs) | /assets/images/figma-bg-blob.png | found (downloaded from Figma) |
| index.html | Vector (home icon) | /assets/images/figma-home-icon.svg | found (downloaded from Figma; kept as SVG — flat icon, not a bitmap) |
| index.html | bg (gradient background) | /assets/images/bg.png | found (user-supplied asset) — replaces the earlier CSS radial-gradient reconstruction |
| politeness.html | bg (gradient background) | /assets/images/figma-content-bg.svg | found (downloaded from Figma — a real SVG, not a CSS reconstruction; viewBox cropped from Figma's own oversized export down to the visible 1920x1080 region) |
| politeness.html | star, blob (Asset 7), cloud (Asset 1) | figma-star.png / figma-bg-blob.png / figma-cloudleft.png | reused verbatim from index.html — confirmed identical assets (MD5 match) |
| politeness.html | arrow (next/prev) | /assets/images/figma-arrow.svg | found (downloaded from Figma; prev built by flipping the same asset via CSS transform, matching 2 of the 3 source frames) |
| politeness.html | Ellipse 1 (side-nav number badge circle) | /assets/images/figma-ellipse-badge.svg | found (downloaded from Figma) |
| politeness.html | main slider videos (grandma+girl / classroom / bus seat) | /assets/videos/1/1.mp4, /2.mp4, /3.mp4 | found (user-supplied video files) — replaces the earlier placeholder-image approach entirely; no static illustration was ever resolved via Figma MCP for these 3 slides, so this isn't a Figma asset at all |