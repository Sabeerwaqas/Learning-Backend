import "dotenv/config";
import express, { json } from "express";

const app = express();

const PORT = process.env.PORT || 3000;

const jokes = [
  {
    id: 1,
    title: "A joke",
    content: "This is a joke",
  },
  {
    id: 2,
    title: "Another joke",
    content: "This is another a joke",
  },
  {
    id: 2,
    title: "Another joke",
    content: "This is another joke",
  },
];

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/jokes", (req, res) => {
  res.json(jokes);
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
