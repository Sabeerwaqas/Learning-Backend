require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/linkedin", (req, res) => {
  res.send("https://www.linkedin.com/in/sabeerwaqas");
});

app.listen(process.env.PORT, () => {
  console.log(`App is listen on port ${process.env.PORT}`);
});
