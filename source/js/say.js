if (CONFIG.say.api) {
  fetch(new Request(CONFIG.say.api))
    .then(function(res) {
      if (!res.ok) {
        throw new Error("HTTP error, status = " + res.status);
      }
      res.json().then(function(data) {
        let sentence = data[Math.floor(Math.random() * data.length)];
        document.querySelector("#say-content").innerText = sentence.content;
        document.querySelector("#say-author").innerText = sentence.author;
        document.querySelector("#say-from").innerText =
          "「" + sentence.from + "」";
      });
    })
    .catch(function(e) {
      console.log("error: " + e.toString());
    });
}
