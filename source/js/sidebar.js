document.addEventListener("DOMContentLoaded", function() {
  /**
   * display TOC
   */
  // main of scroll
  window.addEventListener(
    "scroll",
    throttle(
      function() {
        const curTop = window.scrollY;
        scrollPercent(curTop);
        // head position
        findHeadPosition(curTop);
      },
      50,
      100
    ),
    {
      passive: true
    }
  );

  // toggle sidebar nav and panel
  document.querySelectorAll(".sidebar-nav li").forEach(el => {
    el.onclick = function() {
      const activeTabClass = "sidebar-nav-active";
      const activePanelClass = "sidebar-panel-active";
      if (this.classList.contains(activeTabClass)) return;
      document
        .querySelector("." + activePanelClass)
        .classList.remove(activePanelClass);
      document
        .querySelector("#" + this.dataset.target)
        .classList.add(activePanelClass);
      document
        .querySelector("." + activeTabClass)
        .classList.remove(activeTabClass);
      this.classList.add(activeTabClass);
    };
  });

  // progress
  function scrollPercent(curTop) {
    const bodyHeight = document.body.clientHeight;
    const windowHeight = window.innerHeight;
    let percent = 0;
    if (bodyHeight > windowHeight) {
      percent = Math.floor((curTop / (bodyHeight - windowHeight)) * 100);
    } else {
      percent = 100;
    }
    document.querySelector(".progress-num").innerText = percent;
    document.querySelector(".post-toc-progress .progress-bar").style.width =
      percent + "%";
  }

  function updateAnchor(anchor) {
    if (window.history.replaceState && anchor !== window.location.hash) {
      window.history.replaceState(undefined, undefined, anchor);
    }
  }

  function activeLink(link) {
    document.querySelectorAll(".toc-item").forEach(item => {
      item.classList.remove("active");
    });
    let linkParent = link.parentNode;
    linkParent.classList.add("active");
    while (linkParent.parentNode.classList.contains("toc-child")) {
      linkParent = linkParent.parentNode.parentNode;
      linkParent.classList.add("active");
    }
  }

  // write with vanilla js
  // add active class for cur toc
  // DOM Hierarchy:
  // ol.toc > (li.toc-item, ...)
  // li.toc-item > (a.toc-link, ol.toc-child > (li.toc-item, ...))
  function findHeadPosition(top) {
    // we are not in the post page if no TOC link be found
    if (!document.querySelectorAll(".toc-link").length) return;

    let list = document
      .querySelector(".post-content")
      .querySelectorAll("h1, h2, h3, h4, h5, h6");
    let curId = "";
    list.forEach(el => {
      if (top > el.offsetTop - 25) {
        curId = "#" + el.attributes.id.value;
      }
    });

    let curActiveLink = document.querySelector(".toc-link.active");
    if (curId) {
      if (!curActiveLink || curActiveLink.attributes.href !== curId) {
        let curLink = document.querySelector(".toc-link[href='" + curId + "']");
        activeLink(curLink);
        updateAnchor(curId);
      }
    }
  }
});
