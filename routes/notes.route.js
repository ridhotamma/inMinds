const { Router } = require("express");
const noteModel = require("../models/notes.model");

Router.get("/notes", async (req, res) => {
  const notes = await noteModel.find({});

  try {
    res.json(notes);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
