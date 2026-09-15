// index.html — splash <-> topics transition
// See index.md section 1.7.3 / 2.1.1 for the interaction spec.
// #btnHome (the home button, topics view only) is a real <a href="./index.html"> link now —
// per user request it navigates for real instead of toggling back to the splash section, so it
// needs no JS handler here.
(function () {
    "use strict";

    var mainContainer = document.getElementById("mainContainer");
    var btnEnter = document.getElementById("btnEnter");
    var cardFan = document.querySelector(".card-fan");

    if (btnEnter) {
        var enterAudio = new Audio("./assets/audio/transition/5.mp3");

        btnEnter.addEventListener("click", function () {
            enterAudio.currentTime = 0;
            enterAudio.play().catch(function () {});

            // Per user request: cards fan out and the character rises together, both starting
            // right on click — no staggered "stack pauses, then fans out" delay.
            mainContainer.classList.add("settled");
            mainContainer.classList.add("risen");
            if (cardFan) {
                cardFan.classList.add("fanned");
            }
        });
    }

    // ---- topic card click sound, played before navigating to the topic page ----
    var topicAudio = new Audio("./assets/audio/topic.mp3");
    document.querySelectorAll(".card-fan .card").forEach(function (link) {
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
