const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;

  // dumb way of doing middlewares

  if (!(username === "adi" && password === "pass")) {
    res.json({
      msg: "Send correct inputs",
    });
    return;
  }
  if (kidneyId != 1 && kidneyId != 2) {
    res.json({
      msg: "Send correct inputs",
    });
    return;
  }
  res.json({
    msg: "Your kidney is fine",
  });
});

app.listen(3000);
