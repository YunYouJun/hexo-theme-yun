$(document).ready(function() {
  const MDCRipple = mdc.ripple.MDCRipple;
  document.querySelectorAll(".mdc-ripple-surface").forEach(el => {
    MDCRipple.attachTo(el);
  });
});

// sidebar
$(function() {
  $(".sidebar-toggle").on("click", function() {
    $(".sidebar-toggle .hamburger").toggleClass("is-active");
    $(".container").toggleClass("sidebar-open");
  });
  // click sidebar nav
  $(".sidebar-nav li").on("click", function() {
    let item = $(this);
    let activeTabClassName = "sidebar-nav-active";
    let activePanelClassName = "sidebar-panel-active";
    if (item.hasClass(activeTabClassName)) return;
    let currentTarget = $("." + activePanelClassName);
    let target = $("." + item.data("target"));
    // currentTarget.hide()
    currentTarget.removeClass(activePanelClassName);
    // target.show()
    target.addClass(activePanelClassName);
    item.siblings().removeClass(activeTabClassName);
    item.addClass(activeTabClassName);
  });
});

// search
function closeSearchDialog(e) {
  $("body").css("overflow", "auto");
  $(".popup").slideUp("fast");
  $(".search-popup-overlay").fadeOut("fast");
}

function openSearchDialog() {
  $("body").css("overflow", "hidden");
  $(".search-popup-overlay").fadeIn();
  $(".popup").slideDown("fast", function() {
    $(".search-input")
      .find("input")
      .focus();
  });
}

$(".popup-trigger").click(function(e) {
  openSearchDialog();
  //- shortcut: esc
  $(document).on("keyup", function f(e) {
    if (event.code == "Escape") {
      closeSearchDialog();
      $(document).off("keyup", f);
    }
  });
});
$(".popup-btn-close,.search-popup-overlay").click(closeSearchDialog);

// display toc
// rf from hexo-theme-melody
// modify by hexo-theme-yun
$(function() {
  let initTop = 0;
  $(".toc-child").slideUp();

  // main of scroll
  $(window).scroll(
    throttle(
      function(event) {
        let currentTop = $(this).scrollTop();
        // percentage inspired by hexo-theme-next
        scrollPercent(currentTop);
        // head position
        findHeadPosition(currentTop);
        if (currentTop > 64) {
          if ($("#go-up").css("opacity") === "0") {
            $("#go-up").addClass("show");
          }
        } else {
          $("#go-up").removeClass("show");
        }
      },
      50,
      100
    )
  );

  // expand toc-item
  function expandToc($item) {
    if ($item.is(":visible")) {
      return;
    }
    $item.slideDown();
  }

  function scrollPercent(currentTop) {
    var docHeight = $("#content-outer").height();
    var winHeight = $(window).height();
    var contentMath =
      docHeight > winHeight
        ? docHeight - winHeight
        : $(document).height() - winHeight;
    var scrollPercent = currentTop / contentMath;
    var scrollPercentRounded = Math.round(scrollPercent * 100);
    var percentage = scrollPercentRounded > 100 ? 100 : scrollPercentRounded;
    $(".progress-num").text(percentage);
    $(".post-toc-progress .progress-bar").animate(
      { width: percentage + "%" },
      100
    );
  }

  function updateAnchor(anchor) {
    if (window.history.replaceState && anchor !== window.location.hash) {
      window.history.replaceState(undefined, undefined, anchor);
    }
  }

  // find head position & add active class
  // DOM Hierarchy:
  // ol.toc > (li.toc-item, ...)
  // li.toc-item > (a.toc-link, ol.toc-child > (li.toc-item, ...))
  function findHeadPosition(top) {
    // assume that we are not in the post page if no TOC link be found,
    // thus no need to update the status
    if ($(".toc-link").length === 0) {
      return false;
    }

    var list = $(".post-content").find("h1,h2,h3,h4,h5,h6");
    var currentId = "";
    list.each(function() {
      var head = $(this);
      if (top > head.offset().top - 25) {
        currentId = "#" + $(this).attr("id");
      }
    });

    if (currentId === "") {
      $(".toc-link").removeClass("active");
      $(".toc-child").slideUp();
    }

    var currentActive = $(".toc-link.active");
    if (currentId && currentActive.attr("href") !== currentId) {
      updateAnchor(currentId);

      $(".toc-link").removeClass("active");
      var _this = $('.toc-link[href="' + currentId + '"]');
      _this.addClass("active");

      var parents = _this.parents(".toc-child");
      // Returned list is in reverse order of the DOM elements
      // Thus `parents.last()` is the outermost .toc-child container
      // i.e. list of subsections
      var topLink = parents.length > 0 ? parents.last() : _this;
      expandToc(topLink.closest(".toc-item").find(".toc-child"));
      topLink
        // Find all top-level .toc-item containers, i.e. sections
        // excluding the currently active one
        .closest(".toc-item")
        .siblings(".toc-item")
        // Hide their respective list of subsections
        .find(".toc-child")
        .slideUp();
    }
  }
});
