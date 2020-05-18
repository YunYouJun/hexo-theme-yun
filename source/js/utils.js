HTMLElement.prototype.wrap = function(wrapper) {
  this.parentNode.insertBefore(wrapper, this);
  this.parentNode.removeChild(this);
  wrapper.appendChild(this);
};

Yun.utils = {
  wrapTable: () => {
    document.querySelectorAll("table").forEach((el) => {
      const container = document.createElement("div");
      container.className = "table-container";
      el.wrap(container);
    });
  },
};
