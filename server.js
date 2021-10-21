const express = require("express");
const app = express();
const notes = require("./data/notes");

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

const port = 5500 || process.env.PORT;
app.listen(port, () => console.log("listening to the port " + port));
