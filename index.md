# index.html — Build Instructions

## Navigation
← from: (entry page — no previous)
→ to: 6 topic pages (not yet built — pills are placeholder links, see Open items)

## Rebuild note (read first)
This file replaces the previous version of index.md, which was written for an unrelated
"9 Types of Punya Bandh" design. The actual Figma frames for index.html (per figma-links.md)
belong to the **Politeness** file (`WiTtuOZcXGRlBabEhMj0kF`). A third row in figma-links.md's
frame table pointed at the old Punya Bandh file (`KT4dkzEVW0He32Hpl6qB5l`, node-id=17-666) —
confirmed with the user to be a leftover mistake from the previous project, dropped from this
build. See the "Frame mismatch" correction logged in figma-links.md.

## Layout architecture (revised)
Originally built as a locked `aspect-ratio: 1920/1080` letterboxed box. Per user correction,
switched to this repo's actual established convention — seen in `basic-template.html` and the
`Kaussagg/` reference folder — instead:
- `html{height:100%}` / `body{min-height:100%; overflow:hidden auto}` (global style.css, unchanged) —
  page scrolls vertically if content runs taller than the viewport, not letterboxed.
- Background is always a real `position:absolute` layer (`.bg-base`, `.bg-arc`) covering the
  viewport, not baked into a fixed-ratio box.
- `.main-container` was originally `min-height:100vh` (not aspect-ratio-locked) — but that let
  width and height scale against two unrelated bases (100% of the container's width vs. 100vh of
  the viewport), and on non-16:9 viewports the composition visibly dispersed (mascot/title/cards
  drifting apart) rather than staying intact, per user report. SUPERSEDED: re-locked to Figma's
  1920:1080 ratio via `aspect-ratio: 1920/1080` + `width: min(100%, 177.78vh)` (the standard
  "letterbox contain-fit" trick — 177.78vh is the width that exactly fills 100vh at 16:9, so the
  min() picks whichever dimension is the limiting one and `aspect-ratio` derives the other),
  centered with `body.index-page{display:flex;align-items:center;justify-content:center}`. This
  restores project.md's original "scale like a Figma preview, stay identical on all devices" rule
  for the actual composition, while the background (`.bg-photo`, `position:fixed`, full viewport)
  stays intentionally outside this locked frame so it fills any letterboxed space with no visible
  bar — only the figure/text composition is proportion-locked, not the sky behind it.
- Every `<img>` tag (stars/clouds/blobs/home icon/mascot) uses `width:100%; height:auto` —
  intrinsic ratio only, no forced/cropped heights or `object-fit`, matching the Kaussagg reference
  pattern and the user's explicit "avoid height, keep it auto only" instruction. The mascot image
  no longer uses the Figma-crop offset (`left:-24.38%; width:148.76%; object-fit:cover`) — it now
  renders uncropped at its own natural aspect ratio, sized to the wrapper's width.
- Extended per the user's follow-up ("even the title pill", "even the enter button") to
  content-sized boxes too: `.title-pill` and `.btn-enter` no longer declare `height` — they hug
  their text via `padding` + flex-centering instead of a Figma-derived height percentage. Their
  wrapper divs (`.mascot`, `.left-corner`) dropped their now-vestigial `height` for the same
  reason, once the images inside became intrinsically auto-sized. NOTE: this only applies to
  boxes that should hug their content (text, natural-ratio images) — `.card` keeps its explicit
  height because it's a deliberately-shaped card taller than its own text, not a content-hugging
  pill, and the `.bg-arc`/`.bg-base` decorative shapes keep theirs because they have no content
  to hug (pure gradient shapes).
- Gotcha hit and fixed while doing this: `.mascot img` was `position:absolute` inside `.mascot`
  (also `position:absolute`) — once `.mascot`'s explicit `height` was removed, an absolutely
  positioned child no longer contributes to the parent's auto-height, so `.mascot` collapsed to
  0 height and (with `overflow:hidden`, since removed) clipped the image to invisible. Fixed by
  making `.mascot img` a normal in-flow `display:block` element (and dropping `.mascot`'s
  `overflow:hidden`, no longer needed) so it drives the wrapper's height itself.
- Fix applied: `#section-splash`/`#section-topics` clip (`overflow:hidden`) by default so an
  inactive section's off-canvas bleed (the topics card fan) doesn't add invisible scroll space
  while hidden; the currently-active section un-clips itself (`overflow:visible`) so its own
  bleed (the outer rotated cards) still renders past the edge, matching Figma. See `.card-fan`
  note below — this was already a known bleed (2.7), the fix only changes when it clips.
  BUG FOUND & FIXED: this rule only ever gave `#section-topics` the "unclip when active" override
  (`.main-container.settled #section-topics{overflow:visible}`) — `#section-splash` had no
  equivalent, so it stayed `overflow:hidden` even while it's the active/default section, silently
  re-clipping the blob/cloud decorations (1.2/1.3) that were moved outside `.frame-clip`
  specifically to escape this. That's why they kept appearing "still inside" despite that earlier
  move — added `.main-container:not(.settled) #section-splash{overflow:visible}` to match.
  SECOND BUG FOUND & FIXED (user-reported: "visual of the container for a slight second" on
  Enter): `overflow` isn't animatable, so it was flipping to `hidden` INSTANTLY the moment
  `.settled` toggled — while the outgoing section was still fully opaque (the 0.5s opacity fade
  had barely started) — chopping its bleeding blob/cloud off at the frame's hard edge for a
  visible instant, well before the fade had a chance to mask it. Fixed by adding `overflow 0s
  linear 0.5s` to the shared transition list: the delay holds the section unclipped for its whole
  fade-out, only clipping once it's already fully invisible. (The entering section's `overflow:
  visible` isn't delayed — it starts at opacity:0 anyway, so there's nothing to flash.)
- Per explicit user request, scrolling is disabled on this whole page — SUPERSEDED twice: first
  scoped to only the settled/topics view (via a `body.settled` class index.js toggled alongside
  `#mainContainer`'s), then extended to the splash view too ("same thing for the pre enter also").
  Simplified to one unconditional `body.index-page { overflow: hidden }` in index.css (the
  now-redundant `body.settled` toggle was removed from index.js). Tradeoff: any part of the card
  fan's bottom bleed that falls below the viewport is clipped (unreachable by scroll) rather than
  revealed by scrolling, on short/narrow viewports where the fan doesn't fully fit in one screen.
  BUG FOUND & FIXED (user-reported: "horizontal and vertical scrollbars are added"): `overflow:
  hidden` on `body` alone doesn't reliably suppress the actual viewport scrollbar — the
  decorative stars/blobs/clouds intentionally bleed past the frame's edges via negative left/top
  offsets (normal `position:absolute` content, unlike `.bg-photo`/`.btn-home` which dodge this by
  being `position:fixed`), and that bleed was still inflating `document.documentElement
  .scrollWidth/scrollHeight` and making the page scrollable despite body's own `overflow:hidden`.
  Fixed by adding `html { overflow: hidden }` explicitly too.
- Per user report ("the characters are floating" / a visible gap of empty sky below the mascot on
  a narrow/tall viewport, e.g. an iPhone SE screenshot): NOT a mascot-sizing bug — verified by
  outlining the actual boxes (`.mascot`'s `getBoundingClientRect()` vs `.main-container`'s) that
  the mascot reaches the frame's own bottom edge within <1px. The real cause: `body.index-page`
  used `align-items:center` to vertically center the locked-aspect frame, so on a viewport taller
  (relatively) than 16:9 — where the frame doesn't fill the full screen height — the leftover
  space split evenly above AND below the frame, reading as "floating" content with empty sky
  beneath it. Fixed by switching to `align-items:flex-end`: the frame now anchors to the bottom
  of the screen, so the interactive content (mascot/Enter button/cards) sits flush at the actual
  bottom with no gap below at all — the letterboxing (if any) is now entirely above the frame.
- Per user request, the Enter transition now animates instead of a flat cross-dissolve:
  - `.mascot` — SUPERSEDED once: first tried as two separate per-section elements animating in
    complementary directions during the crossfade (splash shrinks+rises as it fades out, topics
    settles in from enlarged/lower as it fades in). User explicitly rejected this ("this exact
    character image will shrink and go up rather than fade out animation") — they want the same
    image visibly moving, not an illusion from two elements. Rebuilt as ONE shared `<div
    class="mascot" id="mascot">` (direct child of `#mainContainer`, alongside `.bg-photo`, not
    duplicated per section) whose `left`/`top`/`width` transition directly between the splash
    values (13.33%/26.22%/73.34%) and `.main-container.settled .mascot`'s topics values
    (26.09%/20.59% — nudged down slightly from Figma's 16.59% since built/47.82%). No opacity
    or fade involved at all for the mascot now — it only shrinks and rises.
  - `.card` now carries an entrance transform by default — `translate(-50%, calc(-50% + 8vw))
    rotate(var(--card-rotate))`, `opacity:0` — and `.main-container.settled .card` swaps in the
    resting transform (`translate(-50%,-50%) rotate(var(--card-rotate))`, `opacity:1`). Each
    `.card--N` rule now only sets `left`/`top`/`--card-rotate` (a custom property) instead of a
    full `transform`, since the rotation is shared between both the entrance and resting states.
    `.card:hover`'s existing `!important` transform is unaffected either way.

## Structure decision
Frames 1 → 2 form one onboarding sequence, not two separate pages:
- Frame 1 (node 173:4447): splash — centered "Politeness" title + 4-kid mascot group + Enter button.
  The 6 topic-card component instances exist in this frame but are all stacked exactly on top of
  one another at y=1087.5 (frame height is 1080), i.e. fully off-canvas — confirmed empty of visible
  cards via screenshot. Ground truth = screenshot, not raw coordinates, per repo convention.
- Frame 2 (node 173:4473): settled state — title + mascot shift up/shrink, home button + language
  switch appear, 6 topic cards fan out below the mascots in an arc.

index.html therefore has 2 sections: `#section-splash` (Frame 1) and `#section-topics` (Frame 2).
On Enter click, `#mainContainer` gets a `.settled` class that CSS-transitions the shared elements
(title, mascot, decorative stars/clouds/blobs, bg glow) from splash position/size to topics
position/size, fades out the Enter button, and fades in the home button + language switch + cards.

## Frame 1 Guidelines (Splash / Enter screen)
  1- read frame 1 from figma mcp local server https://www.figma.com/design/WiTtuOZcXGRlBabEhMj0kF/Politeness?node-id=173-4447&m=dev (node-id=173:4447), canvas 1920x1080
     for image reference use @assets/images/

    1.1- BG — per user instruction, uses the real `assets/images/bg.png` asset (yellow arc + blue
         sky baked into the bitmap) instead of the earlier CSS gradient reconstruction: ONE shared
         `<img class="bg-photo">`, `position: fixed` (not absolute — see fix note below), width
         100%, height 100%, placed once as a direct child of `#mainContainer` (not duplicated per
         section). (Superseded approach, kept for reference: reconstructing the arc as a CSS
         radial-gradient from Figma's own gradient-fill SVG data — abandoned once the user
         supplied this bg.png asset directly.)
      1.1.1- fix: originally one `<img class="bg-photo">` per section, `position:absolute;
             height:100%` relative to that section's `.frame-clip`. Since the topics section's
             card fan bleeds past `.main-container`'s own box height (`min-height:100vh` — see
             Layout architecture note) without inflating it, the page becomes scrollable past
             that box, but `height:100%` only ever matched the box itself, leaving a white gap
             below the cards on tall/scrolled viewports. Fixed by switching to `position:fixed`
             (viewport-relative, no ancestor-height dependency) AND hoisting the image out of
             both sections entirely, since `#section-topics`'s `opacity:0` (while inactive)
             would otherwise establish a containing block for fixed descendants nested inside
             it, silently reintroducing the same clipping bug.

    1.2/1.3/1.4- decorative blobs (figma-bg-blob.png), clouds (figma-cloudleft.png), and stars
         (figma-star.png) — SUPERSEDED twice:
         (a) originally duplicated per section, clipped by `.frame-clip`
         (b) moved outside `.frame-clip` (direct children of `<section>`) so they could bleed
             into the letterboxed area — but `#section-splash` never got the matching "unclip
             while active" rule, so they stayed invisibly clipped anyway (see the section
             visibility bug note near the bottom of this file)
         (c) FINAL, per explicit user request ("don't duplicate the stars/blob for the second
             screen ... they'll just move up, simple ... won't give the container border too"):
             ONE shared set of elements, not duplicated at all — direct children of
             `#mainContainer`, outside BOTH sections entirely (alongside `.bg-photo`/`.mascot`).
             Each one's own left/top/width/height/rotation transitions straight from its splash
             value to its settled (topics) value in index.css (`.decor-star--1` etc + `.main-
             container.settled` overrides) — same "the element itself moves" approach as the
             mascot, not a crossfade. This is what actually fixed the recurring "container
             glitch": with nothing left inside either section that bleeds past its own edge
             (splash has none; topics only has the card fan), there's no overflow:hidden/visible
             state to toggle for these elements at all, so there's nothing to flash on Enter.
      1.2.1- blob A: left -7.49%, top 44.34%, width 14.99%, height 16.73% → settled: left -4.59%,
             top 39.22% (width/height unchanged)
      1.2.2- blob B: left 95.11%, top 49.95%, width 13.84%, height 15.44% → settled: left 88.79%,
             top 45.28%, width 15.32%, height 17.10%
      1.3.1- cloud left: left -10.23%, top 66.07%, width 38.72%, height 55.52%, rotate 17.62deg →
             settled: top 59.44% (rest unchanged)
      1.3.2- cloud right: left 80.25%, top 77.82%, width 35.14%, height 41.06% → settled:
             top 72.18% (rest unchanged)
      1.4.1- star1: left 17.67%, top 28.94%, width 3.03%, height 5.81% → settled: top 26.53%,
             width 4.29%, height 8.21%
      1.4.2- star2: left 86.67%, top 47.54%, width 3.91%, height 6.89%, rotate 51.62deg →
             settled: left 80.25%, top 39.22%, width 6.87%, height 12.12%
      1.4.3- star3: left 91.01%, top 72.96%, width 5.10%, height 9.10%, rotate 43.19deg →
             settled: top 63.09% (rest unchanged)
      1.4.4- star4: left 10.41%, top 68.74%, width 7.27%, height 13.48%, rotate 15deg → settled:
             top 57.44% (rest unchanged)
      1.4.5- star5: left 2.03%, top 33.66%, width 3.48%, height 6.66% → settled: top 31.41%
             (rest unchanged)
      1.4.6- star6: left 5.11%, top 7.46%, width 4.77%, height 9.13% → settled: left 7.68%,
             top 13.49%, width 2.89%, height 5.53%
      1.4.7- star7: left 87.66%, top 16.01%, width 4.45%, height 8.52% → settled: left 88.79%,
             top 19.03%, width 2.22%, height 4.24%

    1.5- mascot group (4 kids bowing/praying, assets/images/figma-character.png):
      1.5.1- wrapper: left 13.33%, top 26.22%, width 73.34% (positioning box only)
      1.5.2- img: width 100%, height auto — renders uncropped at its own natural aspect ratio
             (per "avoid height, keep it auto only" — no `object-fit`/Figma-crop offset is applied,
             unlike Figma's own cropped/offset source image)

    1.6- title "Politeness" (text, not image): container centered via left 50% + translateX(-50%),
         top 4.81%, width 40vw (per user override — was left 24.11%/width 51.78%). ONE shared
         element per user request ("add animation for titlebar shrink too ... rather than
         duplicate") — a direct child of #mainContainer (like .mascot), not duplicated per
         section. SUPERSEDED once: first had `left`/`transform` also animating (50%→30.92%,
         translateX(-50%)→translateX(0)) alongside width — user reported this "looks very weird",
         since the percentage transform kept recomputing against the simultaneously-shrinking
         width, producing a jittery, non-linear path. Fixed per user's own suggested approach:
         `left:50%`/`transform:translateX(-50%)` now stay CONSTANT in both states (the original
         settled values, left 30.92% + width 38.16%, are themselves symmetric around 50% anyway,
         so this changes nothing visually at rest) — only `width`/`top`/`font-size` transition to
         the settled values (2.6), so the pill shrinks cleanly around a fixed center point, same
         quality as `.mascot`'s plain left/top/width shrink.
      1.6.1- rounded pill outline: border 0.3125vw solid #fff, border-radius 1.77vw,
             box-shadow 0 0.208vw 0.208vw rgba(0,0,0,0.25)
      1.6.2- text centered in pill, color #fff, text-shadow 0 0.208vw 0.208vw rgba(0,0,0,0.25)
      1.6.3- font-size 4vw (NOT clamp — per explicit instruction, use plain vw everywhere for
             font-size; sized down from Figma's literal 9.375vw per user request so it doesn't
             overlap the mascot once settled — see 2.6)
      1.6.4- font "Swis721 LtEx BT" Light — file not present in /fonts, flagged; fallback
             `"Century Gothic", "Futura", Arial, sans-serif` (light weight, geometric sans, closest match)
      1.6.5- render via .english/.hindi/.gujrati spans — Hindi/Gujarati copy not in Figma text
             nodes, English used as placeholder for all 3 until translated strings supplied (flagged)

    1.7- Enter button (node 176:8986 — present in Figma but omitted from the design-context code
         export; recovered via full-page metadata + screenshot cross-check, then read directly by
         node id): left 45.42%, top 90.99%, width 10.02%, height not set — hugs its "Enter" label
         via padding (1vw vertical) instead of a Figma-derived height percentage
      1.7.1- background: linear-gradient(#fffaaf, #ffe959), border 0.156vw solid #fff9e2,
             border-radius 50vw (full pill), box-shadow 0 0.573vw 0.802vw -0.052vw rgba(0,0,0,0.25)
      1.7.2- label "Enter" — font Baloo Regular (assets/fonts, file present), color #af6000,
             centered, font-size 1.875vw
      1.7.3- on click of Enter → add "settled" class to #mainContainer (triggers CSS transition
             described in Structure decision above); hide Enter button, reveal home button +
             language switch + topic cards
      1.7.4- hover/focus-visible state — per user request, read directly from a separate Figma
             hover-state frame (node 176:8997, not part of the main splash/topics frames):
             background becomes linear-gradient(#cae7ff, #68bcff) (light→medium blue, replacing
             the yellow), border-color becomes solid white, label text color becomes white
             (replacing #af6000) — `background`/`border-color`/`color` all transition 0.2s ease

## Frame 2 Guidelines ("topics" section — settled state with card fan)
  2- read frame 2 from figma mcp local server https://www.figma.com/design/WiTtuOZcXGRlBabEhMj0kF/Politeness?node-id=173-4473&m=dev (node-id=173:4473), canvas 1920x1080
     for image reference use @assets/images/

    2.1- global chrome
      2.1.1- home button (Vector component): assets/images/figma-home-icon.svg, class
             [btn-home], drop-shadow 0 0.208vw 0.104vw rgba(0,0,0,0.25) (filter, matches source
             SVG's blur/offset). SUPERSEDED per user request ("move the home button outside the
             container ... on top left side ... clicking it will take me to home page"): no
             longer `left-corner`/inside `.frame-clip` linking to `#section-splash` (a soft
             within-page toggle) — now `#btnHome`, a real `<a href="./index.html">` link, moved
             OUTSIDE `.main-container` entirely (direct child of `<body>`), `position:fixed` at
             the screen's literal top-left corner (`top:2vh; left:2vw`, not frame-relative %) so
             it stays put regardless of letterboxing. Only visible once settled (topics view) —
             `body:has(.main-container.settled) .btn-home{opacity:1}` — via opacity, not
             clipped/removed, since it's no longer nested in a section that could clip it. No JS
             needed anymore (index.js's old btnBack click handler was removed).
      2.1.2- language switch: reuse existing #langSelect markup from basic-template.html
             verbatim (class [language]), never rebuild/restyle — Figma's version (white pill,
             E/H/G in white circles) is NOT replicated per project.md's "Global Elements — Never
             Touch" rule; existing top:4% right:2% placement is kept as-is
      2.1.3- BG: same `assets/images/bg.png` asset as 1.1 (per user instruction). The second,
             lower yellow glow ellipse behind the card fan that the earlier CSS-gradient version
             had is not present in this single shared bg.png — dropped along with the CSS
             approach; flagged as a minor fidelity loss vs. the original Figma reconstruction.

    2.2/2.3/2.4- decorative blobs/clouds/stars: these are the SAME shared elements as 1.2/1.3/1.4
         (not duplicated — see that note), just showing their settled/topics end values, already
         listed inline above as each item's "→ settled:" values.

    2.5- mascot group (smaller, shifted up): wrapper left 26.09%, top 16.59%, width 47.82%
         (positioning box only), img width 100% height auto, same as 1.5.2

    2.6- title "Politeness": container left 30.92%, top 3.39%, width 38.16%, font-size 3vw
         (smaller than the splash's 4vw, per user request, so the title doesn't overlap the
         mascot once settled), same styling as 1.6 (border pill, white text/border, shadow)

    2.7- topic card fan — 6 cards, each: natural size width 14.271% height 36.852%, positioned by
         CENTER point (`left`/`top` below = center, not top-left) via
         `transform: translate(-50%,-50%) rotate(Ndeg)`; bg #fffffa, border 0.521vw solid #f5c947,
         border-radius 1.823vw, box-shadow 0 0.208vw 0.208vw rgba(0,0,0,0.25); text color #1295ff,
         font-size 1.6vw (per user request, sized down from Figma's literal 2.083vw), text-shadow
         0 0.104vw 0.104vw rgba(0,0,0,0.2), font "Abhaya Libre ExtraBold" — file not present in
         /fonts, flagged; superseded by the language-based font policy anyway (see Layout
         architecture note) — font-weight 800 only, no font-family override
      2.7.1- card 1: center-left 14.735%, center-top 92.987%, rotate -14deg — "1. What is Politeness?" → placeholder link
      2.7.2- card 2: center-left 29.084%, center-top 87.268%, rotate -10deg — "2. What is Impoliteness?" → placeholder link
      2.7.3- card 3: center-left 43.529%, center-top 82.765%, rotate -5deg — "3. Impolite gestures" → placeholder link
      2.7.4- card 4: center-left 57.325%, center-top 82.763%, rotate 5deg — "4. How can we be Polite?" → placeholder link
      2.7.5- card 5: center-left 71.727%, center-top 87.266%, rotate 10deg — "5. What are the benefits of being Polite?" → placeholder link
      2.7.6- card 6: center-left 85.988%, center-top 92.929%, rotate 15deg — "6. When should we be Polite?" → placeholder link
      2.7.7- render each label via .english/.hindi/.gujrati spans (English placeholder for all 3
             langs, flagged, same as 1.6.5); each card also on hover: rotate to 0deg + scale 1.05
             (interaction not specified in Figma prototype data — added as a reasonable affordance,
             flagged as a design addition, not a literal Figma requirement)

## Open items (flagged, not blocking build)
  - Hindi / Gujarati copy not present in any Figma text node read so far — English used as
    placeholder in all `.english/.hindi/.gujrati` spans until translated strings are supplied.
  - Fonts "Swis721 LtEx BT Light" (title) and "Abhaya Libre ExtraBold" (cards) are referenced by
    the design but their font files are not in /fonts (only Baloo, ITFDevanagari, NotoSansGujarati,
    krungthep, NEWS701B are present) — using close system-font fallbacks, noted in CSS comments,
    until the real font files are supplied.
  - The 6 topic cards have no destination frame in figma-links.md yet — rendered as inert
    (non-navigating, `href="#"`) list items.
  - No Figma prototype/interaction data (click targets, transition types) was present for either
    frame beyond the Enter button's own name — the splash→topics transition and card destinations
    are inferred from the visual design + the general "onboarding sequence" pattern this repo
    already uses elsewhere, not read from explicit Figma prototype wiring. Flagged for designer review.
  - `assets/js/djp.js` (obfuscated decode/eval script referenced by basic-template.html and every
    other existing page) is intentionally NOT included in index.html — confirmed with the user as
    a security concern (obfuscated eval chain + undocumented `/check_session.php` redirect logic)
    to be investigated separately, not part of this build.
  - The 3rd frame row in figma-links.md's index.html table (old Punya Bandh file, node-id=17-666)
    is dropped from this build per user confirmation — see Rebuild note above.
