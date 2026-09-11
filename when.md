# when.html — Build Instructions

## Navigation
← from: index.html (topic card 6) / any topic page's side-nav badge 6
→ to: itself (side-nav badge 6, self-link)

## Source
No Figma frames exist for this topic yet. Per user request, this page reuses politeness.html's
exact structure/CSS/animations (same `.topic-detail-page` shell, `politeness.css`, `sun-arc`,
decorations, side-nav) — only the content differs, and that content is data-driven (see below).

## Data-driven architecture
Same as the other topic pages: title/slides/dialogue/captions live in `assets/js/data.js`'s
`topicPagesData.when` object, read by the shared `assets/js/topic-page.js` (keyed by
`<body data-topic-key="when">`) and rendered at load time — nothing is hardcoded in this file.

## Content
- Title: "When should we be Polite?"
- 7 slides, one per video in assets/videos/6/ (1.mp4 – 7.mp4)
- No dialogue bubbles on any slide (bubble counts weren't specified for this topic)
- Side-nav: badge 1 → politeness.html, badge 2 → impoliteness.html, badge 3 → gesture.html,
  badge 4 → how.html, badge 5 → benefits.html, badge 6 (self) → when.html

## Open items (flagged, not blocking build)
- Caption text (all 7 slides) is PLACEHOLDER — `[caption text needed]` — no copy supplied yet
  and the video files can't be previewed from here (no ffmpeg available). Fill in
  `topicPagesData.when` in assets/js/data.js once the real copy is available — no HTML changes
  needed, the page renders from that data.
- If any slide should actually have dialogue bubbles, add a `dialogues` array to that slide's
  entry in data.js (same shape as the other topic pages) — none were requested for this topic.
- Hindi/Gujarati copy: same as every other page — English used as placeholder in all 3 language
  fields.
