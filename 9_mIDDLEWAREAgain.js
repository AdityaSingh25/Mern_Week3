import express from "express";

const app = express();

// function isAgeEnough(req, res, next) {
//   const age = req.query.age;
//   if (age >= 14) {
//     next();
//   } else {
//     res.json({
//       msg: "You are unauthorized to ride",
//     });
//   }
// }
// app.use(isAgeEnough);

// app.get("/ride1", (req, res) => {
//   res.json({
//     msg: "Hello",
//   });
// });
// let numberOfCalls = 0;
// function noOfCalls(req, res, next) {
//   numberOfCalls++;
//   console.log(numberOfCalls);
//   next();
// }
// app.use(noOfCalls);
// app.get("/", (req, res) => {
//   res.json({
//     msg: `Hello ${numberOfCalls}`,
//   });
// });

let numberOfRequestsForUser = {};
setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000);

app.use(function (req, res, next) {
  const userId = req.headers["user-id"];
  if (numberOfRequestsForUser[userId]) {
    numberOfRequestsForUser[userId]++;
    if (numberOfRequestsForUser[userId] > 5) {
      res.status(404).send("Blocked");
    } else {
      next();
    }
  } else {
    numberOfRequestsForUser[userId] = 1;
    next();
  }
});

app.listen(3000);
