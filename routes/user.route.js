import express from "express";
import {
  authUser,
  registerUser,
  updateUserProfile,
} from "../controllers/user.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").post(protect, updateUserProfile);

export default router;
