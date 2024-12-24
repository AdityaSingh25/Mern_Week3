const express = require("express");

const app = express();

app.use(express.json());

//so suppose in body user didnt send the data correctly, he sends some strings, or array of booleans
//how you will do the checks now?

// one way is write hundreds of checks for that

// that's where zod comes into picture

app.post("/", (req, res) => {
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;

  res.send("You have " + kidneyLength + " kidneys");
});

//another middleware
// global cache -> it helps you give user a better error message
//if there is ever being an exception in the upper code then this middleware will call, and it takes 4 inputs
// express recognizes it as an error handling middle ware because of these four arguments
app.use(function (err, req, res, next) {
  res.json({
    msg: "Sorry something is wrong with the server",
  });
});

app.listen(3000);
