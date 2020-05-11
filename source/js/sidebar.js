function scrollToLink() {
  const links = document.querySelectorAll(".toc a");
  links.forEach((link) => {
    link.onclick = () => {
      window.scrollTo(
        0,
        document.querySelector(link.getAttribute("href")).offsetTop
      );
    };
  });
}

function initSidebar() {
  scrollToLink();

  // toggle sidebar nav and panel
  document.querySelectorAll(".sidebar-nav li").forEach((el) => {
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
  /**
   * display TOC
   */
  // main of scroll
  if (document.querySelectorAll(".toc-link").length) {
    let tocList = document
      .querySelector(".post-content")
      .querySelectorAll("h1, h2, h3, h4, h5, h6");

    window.addEventListener("scroll", function() {
      findHeadPosition(tocList, window.scrollY);
    });
  }

  function updateAnchor(anchor) {
    if (window.history.replaceState && anchor !== window.location.hash) {
      window.history.replaceState(undefined, undefined, anchor);
    }
  }

  function activeLink(link) {
    document.querySelectorAll(".toc-item").forEach((item) => {
      item.classList.remove("active");
    });
    let linkParent = link.parentNode;
    linkParent.classList.add("active");
    while (linkParent.parentNode.classList.contains("toc-child")) {
      linkParent = linkParent.parentNode.parentNode;
      linkParent.classList.add("active");
    }
  }

  // add active class for cur toc
  // DOM Hierarchy:
  // ol.toc > (li.toc-item, ...)
  // li.toc-item > (a.toc-link, ol.toc-child > (li.toc-item, ...))
  function findHeadPosition(tocList, top) {
    let curId = "";
    for (let i = 0; i < tocList.length; i++) {
      const el = tocList[i];
      if (top > el.offsetTop - 64) {
        curId = "#" + el.attributes.id.value;
      } else {
        break;
      }
    }

    let curActiveLink = document.querySelector(".toc-link.active");

    if (!curId) curId = "#" + document.querySelector("h2").id;
    if (!curActiveLink || curActiveLink.attributes.href !== curId) {
      let curLink = document.querySelector(".toc-link[href='" + curId + "']");
      if (curLink) {
        activeLink(curLink);
        updateAnchor(curId);
      }
    }
  }
}
document.addEventListener("DOMContentLoaded", initSidebar);
document.addEventListener("pjax:success", initSidebar);
