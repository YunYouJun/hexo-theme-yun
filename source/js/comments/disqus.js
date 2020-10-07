// 通过检查 window 对象确认是否在浏览器中运行
const runningOnBrowser = typeof window !== "undefined";
// 通过检查 scroll 事件 API 和 User-Agent 来匹配爬虫
const isBot =
  (runningOnBrowser && !("onscroll" in window)) ||
  (typeof navigator !== "undefined" &&
    /(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(navigator.userAgent));
// 检查当前浏览器是否支持 IntersectionObserver API
const supportsIntersectionObserver =
  runningOnBrowser && "IntersectionObserver" in window;

setTimeout(() => {
  if (!isBot && supportsIntersectionObserver) {
    // 当前环境不是爬虫、并且浏览器兼容 IntersectionObserver API
    const disqusObserver = new IntersectionObserver(
      function(entries) {
        // 当前视窗中已出现 Disqus 评论框所在位置
        if (entries[0].isIntersecting) {
          // 加载 Disqus
          loadDisqus();
          // 停止当前的 Observer
          disqusObserver.disconnect();
        }
      },
      { threshold: [0] }
    );
    // 设置让 Observer 观察 #disqus_thread 元素
    disqusObserver.observe(document.getElementById("disqus_thread"));
  } else {
    // 当前环境是爬虫、或当前浏览器其不兼容 IntersectionObserver API
    // 直接加载 Disqus
    loadDisqus();
  }
}, 100);
