// there are various types of data bases
// graph
// vector
// sql
//noSql

const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:Shubh%401234@cluster0.gk9ec.mongodb.net/user_app" //user_app is the db name
);


const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    return res.status(400).send("User already exists");
  } else {
    const user = new User({
      name: username,
      email: email,
      password: password,
    });

    user.save(); // creating user in db
    res.json({
      msg: "User created successfully",
    });
  }
});

app.listen(3000);
