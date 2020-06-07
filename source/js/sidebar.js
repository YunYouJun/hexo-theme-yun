function toggleSidebarNav() {
  // toggle sidebar nav and panel
  const activeTabClass = "sidebar-nav-active";
  const activePanelClass = "sidebar-panel-active";
  document.querySelectorAll(".sidebar-nav li").forEach((el) => {
    el.onclick = function() {
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
}

function listennSidebarTOC() {
  const navItems = document.querySelectorAll(".post-toc li");
  if (!navItems.length) return;
  const sections = [...navItems].map((element) => {
    const link = element.querySelector(".toc-link");
    const target = document.getElementById(
      decodeURI(link.getAttribute("href")).replace("#", "")
    );
    link.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo(0, target.offsetTop + 1);
    });
    return target;
  });

  function activateNavByIndex(target) {
    if (target.classList.contains("active-current")) return;

    document.querySelectorAll(".post-toc .active").forEach((element) => {
      element.classList.remove("active", "active-current");
    });
    target.classList.add("active", "active-current");
    let parent = target.parentNode;
    while (!parent.matches(".post-toc")) {
      if (parent.matches("li")) parent.classList.add("active");
      parent = parent.parentNode;
    }
  }

  function findIndex(entries) {
    let index = 0;
    let entry = entries[index];
    if (entry.boundingClientRect.top > 0) {
      index = sections.indexOf(entry.target);
      return index === 0 ? 0 : index - 1;
    }
    for (; index < entries.length; index++) {
      if (entries[index].boundingClientRect.top <= 0) {
        entry = entries[index];
      } else {
        return sections.indexOf(entry.target);
      }
    }
    return sections.indexOf(entry.target);
  }

  function createIntersectionObserver(marginTop) {
    marginTop = Math.floor(marginTop + 10000);
    let intersectionObserver = new IntersectionObserver(
      (entries, observe) => {
        let scrollHeight = document.documentElement.scrollHeight + 100;
        if (scrollHeight > marginTop) {
          observe.disconnect();
          createIntersectionObserver(scrollHeight);
          return;
        }
        let index = findIndex(entries);
        activateNavByIndex(navItems[index]);
      },
      {
        rootMargin: marginTop + "px 0px -100% 0px",
        threshold: 0,
      }
    );
    sections.forEach((element) => {
      element && intersectionObserver.observe(element);
    });
  }

  createIntersectionObserver(document.documentElement.scrollHeight);
}

function initSidebar() {
  toggleSidebarNav();
  listennSidebarTOC();
}

document.addEventListener("DOMContentLoaded", initSidebar);
document.addEventListener("pjax:success", initSidebar);
