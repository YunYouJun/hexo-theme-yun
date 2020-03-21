// Hello, I'm YunYouJun.
console.log(
  "%c ☁️ hexo-theme-yun %c https://github.com/YunYouJun/hexo-theme-yun",
  "color: white; background: #0078E7; padding:5px 0;",
  "padding:4px;border:1px solid #0078E7;"
);
// utils
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
