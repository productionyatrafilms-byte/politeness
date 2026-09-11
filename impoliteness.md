# impoliteness.html — Build Instructions

## Navigation
← from: index.html (topic card 2) / any topic page's side-nav badge 2
→ to: itself (side-nav badge 2, self-link)

## Source
No Figma frames exist for this topic yet (unlike politeness.html, which was built from real
Figma data). Per user request, this page reuses politeness.html's exact structure/CSS/animations
(same `.topic-detail-page` shell, `topic-detail-page` class, `politeness.css`, `sun-arc`,
decorations, side-nav) — only the content differs, and that content is data-driven (see below),
not hand-written in this HTML file.

## Data-driven architecture
This page (and gesture.html) no longer hardcodes its title/slides/dialogue/captions — per user
request, all of that lives in `assets/js/data.js`'s `topicPagesData.impoliteness` object, and
`assets/js/topic-page.js` (shared by all three topic pages) reads it — keyed by this page's own
`<body data-topic-key="impoliteness">` — and builds the DOM at load time. See politeness.md's
equivalent note (once ported there) or just read topic-page.js directly — it's short.

## Content
- Title: "What is Impoliteness?"
- 5 slides, one per video in assets/videos/2/ (1.mp4 – 5.mp4)
- Dialogue bubbles per user request: slide 1 has 2 bubbles (left + right), slide 3 has 1 bubble
  (left), slides 2/4/5 have none
- Side-nav: badge 1 → politeness.html, badge 2 (self) → impoliteness.html, badge 3 →
  gesture.html, badges 4–6 → placeholder `href="#"` (pages not built yet)

## Open items (flagged, not blocking build)
- Dialogue bubble text (slide 1's 2 bubbles, slide 3's 1 bubble) and caption text (all 5 slides)
  are PLACEHOLDER — literally `[dialogue text needed]` / `[caption text needed]` — since neither
  was supplied and the video files can't be previewed from here (no ffmpeg available in this
  environment to grab a frame). Fill in `topicPagesData.impoliteness` in assets/js/data.js once
  the real copy is available — no HTML changes needed, the page renders from that data.
- Hindi/Gujarati copy: same situation as every other page in this project — no translated
  strings supplied yet, English used as placeholder in all three language fields.
- No specific video `aria-label` per slide was set (unlike politeness.html's descriptive labels)
  since the video content isn't known — worth adding once the real content is confirmed.
