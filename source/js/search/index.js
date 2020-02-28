window.addEventListener("DOMContentLoaded", () => {
  // Handle and trigger popup window
  document.querySelectorAll(".popup-trigger").forEach(element => {
    element.addEventListener("click", () => {
      document.querySelector(".popup").classList.add("show");
      document.querySelector(".search-input").focus();
    });
  });

  // Monitor main search box
  const onPopupClose = () => {
    document.querySelector(".popup").classList.remove("show");
  };

  document
    .querySelector(".popup-btn-close")
    .addEventListener("click", onPopupClose);
  // window.addEventListener("pjax:success", onPopupClose);
  window.addEventListener("keyup", event => {
    if (event.key === "Escape") {
      onPopupClose();
    }
  });
});
