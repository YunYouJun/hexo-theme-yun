if (CONFIG.say.api) {
  fetch(new Request(CONFIG.say.api))
    .then(function(res) {
      if (res.ok) {
        res.json().then(function(data) {
          let sentence = data[Math.floor(Math.random() * data.length)];
          document.querySelector("#say-content").innerText = sentence.content;
          if (sentence.author) {
            document.querySelector("#say-author").innerText = sentence.author;
          }
          if (sentence.from) {
            document.querySelector("#say-from").innerText =
              "「" + sentence.from + "」";
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
