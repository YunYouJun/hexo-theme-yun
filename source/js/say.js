function say(content, author, from) {
  document.querySelector("#say-content").innerText = content;
  if (author) {
    document.querySelector("#say-author").innerText = author;
  }
  if (from) {
    document.querySelector("#say-from").innerText = "「" + from + "」";
  }
}

if (CONFIG.say.api) {
  fetch(new Request(CONFIG.say.api))
    .then(function(res) {
      if (res.ok) {
        res.json().then(function(data) {
          if (CONFIG.say.hitokoto) {
            say(data.hitokoto, data.from_who, data.from);
          } else {
            let sentence = data[Math.floor(Math.random() * data.length)];
            say(sentence.content, sentence.author, sentence.from);
          }
        });
      } else {
        throw new Error(
          CONFIG.say.api + ", HTTP error, status = " + res.status
        );
      }
    })
    .catch(function(e) {
      console.log("error: " + e.toString());
    });
}
