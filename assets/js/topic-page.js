// Shared renderer for the topic detail pages (politeness.html / impoliteness.html /
// gesture.html). Reads its slide data from topicPagesData (assets/js/data.js), keyed by the
// page's own data-topic-key attribute on <body>, and builds the title/slides/dialogue/captions
// before wiring up the main + caption Swiper instances.
(function () {
    "use strict";

    // topicPagesData is declared with `const` in data.js — that does NOT attach to `window`
    // (unlike `var`), so it must be referenced as a bare identifier here, not window.topicPagesData
    var topicKey = document.body.getAttribute("data-topic-key");
    var data = typeof topicPagesData !== "undefined" && topicPagesData[topicKey];

    if (!data) {
        return;
    }

    function langSpans(className, base, baseHi, baseGj) {
        var wrap = document.createDocumentFragment();
        [["english", base], ["hindi", baseHi], ["gujrati", baseGj]].forEach(function (pair) {
            var span = document.createElement("span");
            span.className = className + " " + pair[0];
            span.textContent = pair[1];
            wrap.appendChild(span);
        });
        return wrap;
    }

    // ---- title ----
    var titlePill = document.querySelector(".title-pill");
    if (titlePill) {
        titlePill.innerHTML = "";
        titlePill.appendChild(langSpans("title-pill__text", data.title, data.titlehi, data.titlegj));
    }

    // ---- main slider (video) ----
    var mainWrapper = document.querySelector("#mainSwiper .swiper-wrapper");
    if (mainWrapper) {
        data.slides.forEach(function (slide) {
            var slideEl = document.createElement("div");
            slideEl.className = "swiper-slide";

            var video = document.createElement("video");
            video.src = slide.video;
            video.autoplay = true;
            video.muted = true;
            video.loop = true;
            video.playsInline = true;
            slideEl.appendChild(video);

            mainWrapper.appendChild(slideEl);
        });
    }

    // ---- dialogue bubbles ----
    // Built into #dialogueOverlay (a sibling of .content-card, same position/size but
    // WITHOUT overflow:hidden) instead of inside the swiper slide itself, so a bubble
    // positioned near or past the card's edge is never clipped by the card's own bounds.
    // One .dialogue-group per slide; only the group matching the active slide is shown.
    var dialogueOverlay = document.getElementById("dialogueOverlay");
    var dialogueGroups = [];
    if (dialogueOverlay) {
        data.slides.forEach(function (slide, index) {
            var group = document.createElement("div");
            group.className = "dialogue-group";
            group.hidden = index !== 0;

            (slide.dialogues || []).forEach(function (bubble) {
                var bubbleEl = document.createElement("div");
                bubbleEl.className = "dialogue-bubble dialogue-bubble--" + bubble.position;

                // Optional per-bubble position overrides (any CSS length/percentage
                // string), so a bubble can be placed anywhere, including outside the
                // .content-card's own footprint, without needing a new preset class.
                if (bubble.left !== undefined) bubbleEl.style.left = bubble.left;
                if (bubble.top !== undefined) bubbleEl.style.top = bubble.top;
                if (bubble.right !== undefined) { bubbleEl.style.right = bubble.right; bubbleEl.style.left = "auto"; }
                if (bubble.bottom !== undefined) { bubbleEl.style.bottom = bubble.bottom; bubbleEl.style.top = "auto"; }
                if (bubble.width !== undefined) bubbleEl.style.width = bubble.width;

                bubbleEl.appendChild(langSpans("dialogue-bubble__text", bubble.text, bubble.texthi, bubble.textgj));
                group.appendChild(bubbleEl);
            });

            dialogueOverlay.appendChild(group);
            dialogueGroups.push(group);
        });
    }

    // ---- caption slider ----
    var captionWrapper = document.querySelector("#captionSwiper .swiper-wrapper");
    if (captionWrapper) {
        data.slides.forEach(function (slide) {
            var slideEl = document.createElement("div");
            slideEl.className = "swiper-slide";
            slideEl.appendChild(langSpans("caption-slider__text", slide.content, slide.contenthi, slide.contentgj));
            captionWrapper.appendChild(slideEl);
        });
    }

    // custom.js's val() runs once, at script-load time, to show only the saved/default
    // language's .english/.hindi/.gujrati elements — but that happens BEFORE the elements
    // above even exist, so they're all left at their default (visible) state. Re-run it now
    // that they're in the DOM, so only the current language actually shows.
    if (typeof val === "function") {
        val((typeof sessionStorage !== "undefined" && sessionStorage.getItem("lang")) || "English");
    }

    // ---- sliders ----
    var captionSwiper = new Swiper("#captionSwiper", {
        direction: "vertical",
        allowTouchMove: false,
        speed: 400,
    });

    // the slider itself does not loop (only the videos loop, via their own loop property) —
    // arrows are hidden at each end instead of wrapping around
    var mainSwiper = new Swiper("#mainSwiper", {
        speed: 500,
        thumbs: { swiper: null },
    });

    var btnPrev = document.getElementById("btnPrev");
    var btnNext = document.getElementById("btnNext");
    var pranamLink = document.getElementById("pranamLink");

    function updateArrows() {
        if (btnPrev) btnPrev.hidden = mainSwiper.isBeginning;
        if (btnNext) btnNext.hidden = mainSwiper.isEnd;
        // pranamLink only exists on the last topic page (when.html) — it
        // replaces the next arrow once its own last slide is reached.
        if (pranamLink) pranamLink.classList.toggle("is-visible", mainSwiper.isEnd);
    }

    function updateDialogueGroups() {
        dialogueGroups.forEach(function (group, index) {
            group.hidden = index !== mainSwiper.activeIndex;
        });
    }

    mainSwiper.on("slideChange", function () {
        captionSwiper.slideTo(mainSwiper.activeIndex);
        updateArrows();
        updateDialogueGroups();
    });

    updateArrows();

    var swiperAudio = new Audio("./assets/audio/swiper.mp3");
    function playSwiperSound() {
        swiperAudio.currentTime = 0;
        swiperAudio.play().catch(function () {});
    }

    if (btnPrev) {
        btnPrev.addEventListener("click", function () {
            playSwiperSound();
            mainSwiper.slidePrev();
        });
    }
    if (btnNext) {
        btnNext.addEventListener("click", function () {
            playSwiperSound();
            mainSwiper.slideNext();
        });
    }

    // ---- side-nav (subpoint) click sound, played before navigating ----
    var topicAudio = new Audio("./assets/audio/topic.mp3");
    document.querySelectorAll(".side-nav-badge").forEach(function (link) {
        link.addEventListener("click", function (e) {
            var href = link.getAttribute("href");
            if (!href || href === "#") { return; }
            e.preventDefault();

            var navigated = false;
            var go = function () {
                if (navigated) { return; }
                navigated = true;
                window.location.href = href;
            };

            topicAudio.currentTime = 0;
            topicAudio.addEventListener("ended", go, { once: true });

            var playPromise = topicAudio.play();
            if (playPromise !== undefined) {
                playPromise.catch(go);
            }

            setTimeout(go, 600);
        });
    });
})();
