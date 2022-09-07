const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/cats", (req, res) => {
  res.send("This page is about cats.");
});

app.get("/dogs", (req, res) => {
  res.send("This page is about dogs.");
});

app.get("/animal/:typeOfAnimal", (req, res) => {
  res.send("You are looking for " + req.params.typeOfAnimal);
});

app.get("*", (req, res) => {
  res.send("Can't find the page.");
});

app.post("/formHandling", (req, res) => {
  let { fullname, age } = req.body;
  res.send(
    `Thanks for posting. 
    Your name is ${fullname} and your age is ${age}.`
  );
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
