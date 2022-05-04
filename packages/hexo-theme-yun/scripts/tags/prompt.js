hexo.extend.tag.register(
  "prompt",
  function(args, content) {
    const password = args[0];
    return (
      "<button class='hty-button hty-button--raised prompt-block-btn' onclick=" +
      `"const sign = window.prompt('口令？'); if (sign === '${password}') {this.style.display='none'; this.nextElementSibling.style.display='block'}` +
      '">See Hiden Block</button><div class="prompt-block">' +
      content +
      "</div>"
    );
  },
  { ends: true }
);
