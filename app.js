const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  //   res.send("You are on the homepage.");
});

app.get("/cats", (req, res) => {
  res.send("This page is about cats.");
});

app.get("/dogs", (req, res) => {
  res.send("This page is about dogs.");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
