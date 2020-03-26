window.addEventListener("DOMContentLoaded", () => {
  // Handle and trigger popup window
  document.querySelector(".popup-trigger").addEventListener("click", () => {
    document.querySelector(".popup").classList.add("show");
    setTimeout(() => {
      document.querySelector(".search-input").focus();
    }, 100);
  });

  // Monitor main search box
  const onPopupClose = () => {
    document.querySelector(".popup").classList.remove("show");
  };

  document.querySelector(".popup-btn-close").addEventListener("click", () => {
    onPopupClose();
  });

  window.addEventListener("keyup", event => {
    if (event.key === "Escape") {
      onPopupClose();
    }
  });
});
