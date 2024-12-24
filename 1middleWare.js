const express = require("express");

const app = express();

app.use(express.json());

let numberOfRequests = 0;
function calculateRequests(req, res, next) {
  numberOfRequests++;
  console.log(numberOfRequests);
  next();// this is neccessary 
}

app.use(calculateRequests);

// app.use(userMiddleware); //instead of passing the function in endpoint you can use this function, now every time when the endpoint will call it will go through this middleware

// // app.get('/',<now no need to pass middleware functions here> ()=>{})
// app.use(kidneyMiddleware);

function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "aditya" && password != "pass") {
    res.status(403).json({
      msg: "Send correct pass/username",
    });
  } else {
    next();
  }
}

function kidneyMiddleware(res, req, next) {
  const kidneyId = req.query.kidneyId;

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(403).json({
      msg: "send correct kidney Id",
    });
  } else {
    next();
  }
}

app.get("/", (req, res) => {
  res.send("Ok");
});

app.listen(3000);
