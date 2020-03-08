function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    let context = this;
    let args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function throttle(func, wait, mustRun) {
  let timeout;
  let startTime = new Date();

  return function() {
    let context = this;
    let args = arguments;
    let curTime = new Date();

    clearTimeout(timeout);
    if (curTime - startTime >= mustRun) {
      func.apply(context, args);
      startTime = curTime;
    } else {
      timeout = setTimeout(func, wait);
    }
  };
}

Yun.utils = {
  wrapImage: function() {
    let images = document.querySelectorAll(
      ".post-card-excerpt img, .post-content img, .post-excerpt img"
    );
    // center & lazy
    if (images && images.length > 0) {
      images.forEach(image => {
        image.loading = "lazy";
        image.parentNode.style.textAlign = "center";
      });
    }
  },

  /**
   * Transform embedded video to support responsive layout.
   * @see https://ultimatecourses.com/blog/fluid-and-responsive-youtube-and-vimeo-videos-with-fluidvids-js
   */
  embeddedVideoTransformer: function() {
    let iframes = document.getElementsByTagName("iframe");
    let SUPPORTED_PLAYERS = [
      "www.youtube.com",
      "player.vimeo.com",
      "music.163.com"
    ];
    for (let i = 0; i < iframes.length; i++) {
      let iframe = iframes[i];
      if (iframe.src.search(SUPPORTED_PLAYERS.join("|")) !== -1) {
        let videoRatio = (iframe.height / iframe.width) * 100;
        iframe.width = "100%";

        let wrap = document.createElement("div");
        wrap.className = "fluid-vids";
        wrap.style.width = "100%";
        wrap.style.minHeight = "90px";
        wrap.style.height = iframe.height;
        wrap.style.position = "relative";

        let iframeParent = iframe.parentNode;
        iframeParent.insertBefore(wrap, iframe);
        wrap.appendChild(iframe);
      }
    }
  }
};
