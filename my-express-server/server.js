const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello!</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me @ fakeemail@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("I own this page");
});

app.get("/hobbies", function (req, res) {
  res.send("i like to code");
});
app.listen(3000, function () {
  console.log("server started on port 3000");
});
