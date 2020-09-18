const express = require("express");
const { response } = require("express");

const app = express();

app.get("/", function (req, res) {
  response.send("index.html", { root: _dirname });
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
