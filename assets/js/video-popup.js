// Start button + video popup for one slide of a topic page (same behaviour as
// the one built into topic-1.html). Call initVideoPopup({ src, slideIndex }),
// then call the returned sync(activeIndex) from the page's swiper init and
// slideChange handlers.
// Plain inline SVG icons (no icon font); sized by the parent's font-size via 1em.
const VIDEO_POPUP_ICONS = {
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h4.5v16H6zM13.5 4H18v16h-4.5z"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.7 4.3 12 10.6l6.3-6.3 1.4 1.4-6.3 6.3 6.3 6.3-1.4 1.4-6.3-6.3-6.3 6.3-1.4-1.4 6.3-6.3-6.3-6.3z"/></svg>',
  expand: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h6v2H6v4H4zM14 4h6v6h-2V6h-4zM4 14h2v4h4v2H4zM18 14h2v6h-6v-2h4z"/></svg>',
  compress: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4h2v6H4V8h4zM14 4h2v4h4v2h-6zM4 14h6v6H8v-4H4zM14 14h6v2h-4v4h-2z"/></svg>',
};

function initVideoPopup({ src, slideIndex, corner = "bottom-left" }) {
  document.body.insertAdjacentHTML(
    "beforeend",
    `
    <div class="video-btn video-btn--${corner} hidden">
      <button class="start-video-btn" type="button">
        <span class="play-circle"><span class="vp-icon">${VIDEO_POPUP_ICONS.play}</span></span>
        <span>START</span>
      </button>
    </div>

    <div class="video-popup">
      <div class="video-blur-bg"></div>

      <button class="video-close-btn" type="button">
        <span class="vp-icon">${VIDEO_POPUP_ICONS.close}</span>
      </button>

      <div class="popup-video-box">
        <video class="popup-video" src="${src}" playsinline preload="none"></video>

        <div class="video-click-layer"></div>

        <div class="custom-video-controls">
          <button class="custom-play-btn" type="button">
            <span class="vp-icon">${VIDEO_POPUP_ICONS.play}</span>
          </button>

          <span class="video-time current-time">0:00</span>

          <input
            type="range"
            class="video-progress"
            min="0"
            max="100"
            value="0"
            tabindex="-1"
            aria-disabled="true"
          />

          <span class="video-time total-time">0:00</span>

          <button class="zoom-btn" type="button">
            <span class="vp-icon">${VIDEO_POPUP_ICONS.expand}</span>
          </button>
        </div>
      </div>
    </div>`,
  );

  const videoBtnWrap = document.querySelector(".video-btn");
  const startVideoBtn = document.querySelector(".start-video-btn");
  const startVideoIcon = document.querySelector(".start-video-btn .vp-icon");
  const videoPopup = document.querySelector(".video-popup");
  const videoCloseBtn = document.querySelector(".video-close-btn");

  const popupVideoBox = document.querySelector(".popup-video-box");
  const popupVideo = document.querySelector(".popup-video");
  const videoClickLayer = document.querySelector(".video-click-layer");

  const customPlayBtn = document.querySelector(".custom-play-btn");
  const customPlayIcon = document.querySelector(".custom-play-btn .vp-icon");

  const zoomBtn = document.querySelector(".zoom-btn");
  const zoomIcon = document.querySelector(".zoom-btn .vp-icon");

  const progressBar = document.querySelector(".video-progress");
  const currentTimeText = document.querySelector(".current-time");
  const totalTimeText = document.querySelector(".total-time");

  function updatePlayIcons(isPlaying) {
    const svg = isPlaying ? VIDEO_POPUP_ICONS.pause : VIDEO_POPUP_ICONS.play;

    [customPlayIcon, startVideoIcon].forEach((icon) => {
      icon.innerHTML = svg;
    });
  }

  function openPopupVideo() {
    videoPopup.classList.add("active");

    popupVideo.currentTime = 0;
    progressBar.value = 0;
    currentTimeText.textContent = "0:00";

    // preload is "none", so play() itself starts the download (waiting for
    // loadedmetadata first would wait forever)
    popupVideo.play().catch(() => {});

    updatePlayIcons(true);
  }

  function closePopupVideo() {
    videoPopup.classList.remove("active");

    popupVideo.pause();
    popupVideo.currentTime = 0;

    progressBar.value = 0;
    currentTimeText.textContent = "0:00";

    popupVideoBox.classList.remove("zoomed");

    zoomIcon.innerHTML = VIDEO_POPUP_ICONS.expand;

    updatePlayIcons(false);
  }

  function toggleVideoPlayPause() {
    if (popupVideo.paused) {
      popupVideo.play().catch(() => {});
      updatePlayIcons(true);
    } else {
      popupVideo.pause();
      updatePlayIcons(false);
    }
  }

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${seconds}`;
  }

  function updateProgress() {
    const current = popupVideo.currentTime;
    const duration = popupVideo.duration;

    if (duration > 0) {
      progressBar.value = (current / duration) * 100;
      currentTimeText.textContent = formatTime(current);
      totalTimeText.textContent = formatTime(duration);
    }
  }

  function seekVideoToProgress() {
    const duration = popupVideo.duration;

    if (!duration || duration <= 0) return;

    popupVideo.currentTime = (Number(progressBar.value) / 100) * duration;
  }

  startVideoBtn.addEventListener("click", openPopupVideo);
  customPlayBtn.addEventListener("click", toggleVideoPlayPause);
  videoClickLayer.addEventListener("click", toggleVideoPlayPause);
  videoCloseBtn.addEventListener("click", closePopupVideo);

  videoPopup.addEventListener("click", (e) => {
    if (
      e.target === videoPopup ||
      e.target.classList.contains("video-blur-bg")
    ) {
      closePopupVideo();
    }
  });

  popupVideo.addEventListener("timeupdate", updateProgress);

  popupVideo.addEventListener("loadedmetadata", () => {
    totalTimeText.textContent = formatTime(popupVideo.duration);
  });

  popupVideo.addEventListener("play", () => updatePlayIcons(true));
  popupVideo.addEventListener("pause", () => updatePlayIcons(false));

  popupVideo.addEventListener("ended", () => {
    updatePlayIcons(false);
    progressBar.value = 100;
  });

  progressBar.addEventListener("input", seekVideoToProgress);
  progressBar.addEventListener("change", seekVideoToProgress);

  zoomBtn.addEventListener("click", () => {
    popupVideoBox.classList.toggle("zoomed");

    const zoomed = popupVideoBox.classList.contains("zoomed");
    zoomIcon.innerHTML = zoomed
      ? VIDEO_POPUP_ICONS.compress
      : VIDEO_POPUP_ICONS.expand;
  });

  // Show the button only on the slide this video belongs to.
  function sync(activeIndex) {
    if (activeIndex === slideIndex) {
      videoBtnWrap.classList.remove("hidden");
    } else {
      videoBtnWrap.classList.add("hidden");

      if (videoPopup.classList.contains("active")) {
        closePopupVideo();
      }
    }
  }

  return { sync };
}
