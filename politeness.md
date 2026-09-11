# politeness.html — Build Instructions

## Navigation
← from: index.html (topic card 1, "What is Politeness?")
→ to: politeness.html is itself card 1's destination; the side-nav (3.5) links to cards 2–6's
  destination pages, none of which exist yet — placeholder `href="#"` for now, same pattern
  index.html's cards used before this page existed.

## Source frames
Read from figma mcp local server, all three from https://www.figma.com/design/WiTtuOZcXGRlBabEhMj0kF/Politeness:
- node-id=173-4915 (slide 1 state — main image + caption showing slide 1, no dialogue bubbles)
- node-id=173-7644 (slide 2 state — main image + caption showing slide 2, classroom dialogue bubbles)
- node-id=173-7712 (slide 3 state — main image + caption showing slide 3, bus/seat dialogue bubbles)

These are NOT three separate pages — they're the same "What is Politeness?" content page captured
at three different positions of its own internal image+caption slider (confirmed by comparing the
three frames: identical layout/chrome, only the `Frame 10`/`Frame 11` instance's x-offset and the
presence/content of the "left"/"right" dialogue-bubble groups differ). One page, one slider with
3 slides, built from all three frames' data combined.

## Inherited-but-hidden layers (flagged, intentionally omitted)
Each frame's raw export includes a full copy of the "home" template's own layers — the 4-kid
mascot `character` (918×768 at the same x/y as the content card, i.e. 100% obscured behind it)
and the 6-pill topic fan `point` (positioned at y=683–1230, obscured behind Frame 11's caption
box). Confirmed against all three frames' screenshots: neither is visible in the actual rendered
design. These are leftover base-template layers, not part of this page's visible composition —
omitted from the build entirely (ground truth = the screenshots, same reasoning as index.md's
Correction note for its own off-canvas cluster).

## Frame Guidelines

  1- Background: read from all 3 frames — reconstructed as an actual downloaded asset
     (assets/images/figma-content-bg.svg, the literal Figma gradient-shape SVG this page's "bg"
     layer renders from: a blue diamond-gradient base rect + 2 yellow radial-gradient ellipses).
     Same `.bg-photo` convention as index.html (position:fixed, full viewport) but this page's
     arc is the opposite orientation from index.html's bg.png — blue dominant at the top, yellow
     rising from the bottom — a different asset, not a reused/flipped one.
     1.1- decorative stars (assets/images/figma-star.png, reused from index.html) — same 7-star
          layout as index.html's splash frame (identical left/top/width/height/rotate values,
          confirmed matching), static (no shrink/move animation — this page has no settle
          transition, unlike index.html)
     1.2- decorative blobs — TWO different blob assets on this page, both reused from index.html
          except one: "bg 1Asset 7" (assets/images/figma-bg-blob.png, already have it) at the
          same corner positions as index.html's splash blobs, PLUS a second, larger "bg 1Asset 1"
          blob (assets/images/figma-bg-blob2.png, newly downloaded) at left -68px/-196px-ish
          (left edge, bleeding off-canvas) and right ~1540px (right edge, bleeding off-canvas) —
          both blurred 12.5px→0.651vw, same as figma-bg-blob.png's treatment

  2- global chrome
     2.1- home icon: assets/images/figma-home-icon.svg (reused from index.html), position:fixed
          top-left of the viewport (same `.btn-home` component/behavior as index.html, not
          frame-relative) — links to `./index.html` (real navigation, matches index.html's home
          button). Always visible on this page (no settle-state gating needed, single-state page).
     2.2- language switch: reuse existing #langSelect markup verbatim, never rebuild/restyle
     2.3- title pill "What is Politeness?": DIFFERENT color scheme from index.html's title —
          background #ffdb20 (yellow, solid, not a gradient), border 6px→0.3125vw solid white,
          border-radius 22px→1.146vw, text color #4d4d4d (dark gray, not white), text-shadow
          0 4px 4px rgba(0,0,0,0.25), font "Swis721 LtEx BT" (not in /fonts, same fallback
          treatment as index.html's title — superseded by the language-based font policy anyway),
          centered top, box left 622.08px/1920=32.4%, top 37.45px/1080=3.47%, width
          694.84px/1920=36.19%, height not set (hugs text via padding, same "avoid height"
          convention as index.html's title-pill and Enter button)

  3- main content
     3.1- content card: rounded box, bg #d5d5d5 (light gray, visible only as a sliver behind the
          rounded corners since the slider images fill it edge-to-edge), border 10px→0.521vw
          solid white, border-radius 40px→2.083vw, box-shadow 0 25px 30px rgba(0,0,0,0.25),
          position left 520/1920=27.08%, top 181/1080=16.76%, width 899/1920=46.82%,
          height 661/1080=61.20%, overflow hidden (clips the slider)

     3.2- main slider (Swiper.js, per project rules — no other slider library) — SUPERSEDED:
          originally built with placeholder images since get_design_context/get_screenshot never
          resolved a downloadable asset URL for these 3 illustrations (unlike every other image
          on this page). Per user-supplied files, each slide is now a `<video>` (autoplay muted
          loop playsinline, same convention as pranam.html's video) instead of a static image:
          3.2.1- first slide → assets/videos/1/1.mp4 (grandma+girl-in-living-room scene)
          3.2.2- second slide → assets/videos/1/2.mp4 (boy+girl classroom scene)
          3.2.3- third slide → assets/videos/1/3.mp4 (boy-giving-up-seat-to-elderly-man scene)
          3.2.4- on click of next arrow (assets/images/figma-arrow.svg) → advance slider one slide
          3.2.5- on click of prev arrow (assets/images/figma-arrow.svg, rotated 180deg — same
                 single asset flipped via CSS transform, matching how 2 of the 3 source frames
                 build "prev" from the "next" asset; the third frame's separate prev/next SVGs
                 are functionally identical shapes, not worth a second asset) → previous slide
          3.2.6- arrows positioned left/right of the content card at its vertical center, outside
                 the card's own rounded box (left arrow ~348px/1920=18.1%, right arrow
                 ~1590px/1920=82.8%, both top ~406px/1080=37.6%)

     3.3- dialogue-bubble overlays — layered ON TOP of the image slider, only on slides 2 and 3
          (slide 1 has none):
          3.3.1- slide 2 (classroom): left bubble "Thank you for helping me in studies" /
                 " Have a seat, sir" — WAIT, cross-checked against the slide 2 screenshot: the
                 visible bubbles actually read "Thank you for helping me in studies" (left,
                 speaker = boy) and "I am glad, I could help" (right, speaker = girl) — the raw
                 node text also contains a second, non-visible line per bubble (" Have a seat,
                 sir" / "Thank you") which is slide 3's dialogue baked into the same reused
                 component instance at a different scroll offset (each "left"/"right" bubble
                 group is itself a small 2-line vertically-scrolling mini-slider, like the main
                 image slider, revealing one line per main-slide position). Ground truth = the
                 screenshot: slide 2 shows "Thank you for helping me in studies" (left) / "I am
                 glad, I could help" (right); slide 3 shows "Have a seat, sir" (left) / "Thank
                 you" (right). Built as plain static per-slide text (not a nested sub-slider —
                 not worth the complexity for 2 lines that only ever show one at a time per
                 parent slide anyway).
          3.3.2- bubble style: bg white, border 4px→0.208vw solid #f5c947, border-radius
                 223px→11.6vw (fully round/pill), box-shadow 0 3px 11.6px rgba(0,0,0,0.43),
                 text color #58554a, font Baloo (assets/fonts, matches .english policy), centered
          3.3.3- slide 2 positions: left bubble ~left 20.8%/top 21.9%, right bubble ~left
                 65.3%/top 22.2%, both width ~12.1%, height ~15.5%
          3.3.4- slide 3 positions: left bubble ~left 20.8%/top 21.9% (same as slide 2 — only the
                 text differs), right bubble ~left 67.7%/top 22.2%

     3.4- caption text (below the content card), SYNCED to the main image slider — one caption
          per slide, shown/hidden in lockstep with the active slide (Swiper fade-effect synced
          slider, per project's synced-slider pattern, OR a plain JS class toggle keyed to the
          main slider's active index — implementation detail, visual result must be: exactly one
          caption visible at a time, always matching the currently-shown image):
          3.4.1- slide 1 caption: "Politeness is a form of respect toward others."
          3.4.2- slide 2 caption: "Politeness means speaking softly."
          3.4.3- slide 3 caption: "Politeness means having good behavior and manners."
          3.4.4- style: color #3d3d3d, font "Abhaya Libre ExtraBold" (not in /fonts — superseded
                 by language-based font policy), font-size 64px→3.333vw, text-align center,
                 text-shadow 0 2px 2px rgba(0,0,0,0.3), box left 324/1920=16.875%, top
                 871/1080=80.65%, width 1291/1920=67.24%

     3.5- side navigation — 6 numbered circular badges, right edge, right vertical stack, one per
          topic (same 6 topics/order as index.html's card fan):
          3.5.1- badge 1 → "What is Politeness ?" → politeness.html (this page — could style as
                 the active/current badge, not specified in the source data, left as visually
                 identical to the others per "no distinct active style found" precedent from
                 index.md 3.5)
          3.5.2- badge 2 → "What is Impoliteness ?" → placeholder link, page not yet built
          3.5.3- badge 3 → "Impolite gestures" → placeholder link, page not yet built
          3.5.4- badge 4 → "How can we be Polite ?" → placeholder link, page not yet built
          3.5.5- badge 5 → "What are the benefits of being Polite ?" → placeholder link, page not
                 yet built
          3.5.6- badge 6 → "When should we be Polite ?" → placeholder link, page not yet built
          3.5.7- each badge: a 310×76px pill, but positioned so only the small circular number
                 badge (76×76, left edge of the pill) is visible by default — the white label
                 pill with the topic text sits off-canvas to the right (`left: 225.84px` within
                 its own 310px-wide box, i.e. past the visible frame edge). On hover, the whole
                 310px pill slides left into view, revealing the label text next to the number
                 (an interaction inferred from the geometry — off-canvas-by-default + reveal-on-
                 hover is the only sensible reading of a label positioned entirely outside its
                 own component's visible bounds — not a literal recorded Figma prototype/reaction,
                 flagged same as index.md's card-hover affordance)
          3.5.8- badge style: circle bg image assets/images/figma-ellipse-badge.svg behind the
                 number, number text color white, font "Momo Trust Display" (not in /fonts,
                 superseded by language policy), label text color #4d4d4d, font "Abhaya Libre
                 ExtraBold" (not in /fonts, superseded), both drop-shadow 0 4px 2px rgba(0,0,0,0.25)

## Open items (flagged, not blocking build)
- RESOLVED: the 3 main slider images (grandma+girl, classroom, bus/seat) had no downloadable
  asset URL via the Figma MCP tools (get_design_context/get_screenshot returned only rendered
  previews for this specific node). Built with placeholder boxes first; user supplied real video
  clips instead (assets/videos/1/1.mp4, 2.mp4, 3.mp4) — each slide is now a `<video>` (autoplay
  muted loop playsinline, same convention as pranam.html) rather than a static image at all.
  - Side-nav hover-reveal (3.5.7) is inferred from off-canvas geometry, not a recorded Figma
  prototype interaction — flagged for designer confirmation like index.md's card hover affordance.
- Hindi/Gujarati copy: same situation as index.html — no translated strings in any Figma text
  node read so far, English used as placeholder in all `.english/.hindi/.gujrati` spans.
- Fonts "Swis721 LtEx BT" (title), "Abhaya Libre ExtraBold" (caption/side-nav label), "Momo Trust
  Display" (side-nav number) — none present in /fonts, all superseded by the project's
  language-based font policy (Baloo/ITFDevanagari/NotoSansGujarati) rather than given individual
  fallbacks, same precedent as index.html.
- Side-nav badges 2–6 have no destination page yet — `href="#"`, same placeholder pattern
  index.html's cards used before politeness.html existed.
