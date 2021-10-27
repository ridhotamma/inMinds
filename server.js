const express = require("express");
const cors = require("cors");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/database");

const app = express();
dotenv.config();
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send("hello world from express");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/note/:id", (req, res) => {
  const selectedNote = notes.find((note) => note._id === req.params.id);
  res.json(selectedNote);
});

const port = process.env.PORT || 5500;
app.listen(port, () => console.log("listening to the port " + port));
