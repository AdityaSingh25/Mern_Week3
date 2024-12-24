const express = require("express");
const app = express();
app.use(express.json());
const jwt = require("jsonwebtoken");

const jwtPassword = "123456";

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "Harkirat Singh",
  },
  {
    username: "aditya@gmail.com",
    password: "1234",
    name: "Aditya Singh",
  },
  {
    username: "cosmo@gmail.com",
    password: "12332",
    name: "Cosmo Singh",
  },
];

function userExists(username, password) {
  // return true if user exits with this username
  let userExist = false;

  for (let i = 0; i < ALL_USERS.length; i++) {
    if (
      ALL_USERS[i].username == username &&
      ALL_USERS[i].password == password
    ) {
      userExist = true;
    }
  }

  return userExist;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnot exists in our db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    res.json({
      users: ALL_USERS.filter(function (value) {
        if (value.username == username) {
          return false;
        } else {
          return true;
        }
      }),
    });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);
