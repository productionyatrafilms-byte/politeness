# gesture.html — Build Instructions

## Navigation
← from: index.html (topic card 3) / any topic page's side-nav badge 3
→ to: itself (side-nav badge 3, self-link)

## Source
No Figma frames exist for this topic yet. Per user request, this page reuses politeness.html's
exact structure/CSS/animations (same `.topic-detail-page` shell, `politeness.css`, `sun-arc`,
decorations, side-nav) — only the content differs, and that content is data-driven (see below).

## Data-driven architecture
Same as impoliteness.md's note: title/slides/dialogue/captions live in `assets/js/data.js`'s
`topicPagesData.gesture` object, read by the shared `assets/js/topic-page.js` (keyed by
`<body data-topic-key="gesture">`) and rendered at load time — nothing is hardcoded in this file.

## Content
- Title: "Impolite gestures"
- 6 slides, one per video in assets/videos/3/ (1.mp4 – 6.mp4)
- Dialogue bubbles per user request: slide 1 has 2 bubbles (left + right), slide 2 has 2 bubbles
  (left + right), slides 3–6 have none
- Side-nav: badge 1 → politeness.html, badge 2 → impoliteness.html, badge 3 (self) →
  gesture.html, badges 4–6 → placeholder `href="#"` (pages not built yet)

## Open items (flagged, not blocking build)
- Dialogue bubble text (slide 1 and slide 2's 2 bubbles each) and caption text (all 6 slides) are
  PLACEHOLDER — `[dialogue text needed]` / `[caption text needed]` — same reasoning as
  impoliteness.md (no copy supplied, no way to preview the video frames from here). Fill in
  `topicPagesData.gesture` in assets/js/data.js once the real copy is available.
- Hindi/Gujarati copy: same as every other page — English used as placeholder in all 3 language
  fields.
- No specific video `aria-label` per slide set yet, same reasoning as impoliteness.md.
