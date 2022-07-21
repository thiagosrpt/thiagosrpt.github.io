function sendText() {
  fetch("https://textbelt.com/text", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      phone: "6469517507",
      message: "test",
      key: "textbelt",
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};

sendText()
