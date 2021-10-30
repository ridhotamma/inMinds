import express from "express";
import {
  getNoteById,
  getNotes,
  CreateNote,
  DeleteNote,
  UpdateNote,
} from "../controllers/note.controller.js";
const router = express.Router();
import { protect } from "../middlewares/auth.middleware.js";

router.route("/").get(protect, getNotes);
router
  .route("/:id")
  .get(getNoteById)
  .delete(protect, DeleteNote)
  .put(protect, UpdateNote);
router.route("/create").post(protect, CreateNote);

export default router;
