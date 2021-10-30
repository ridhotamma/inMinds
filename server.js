import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import colors from "colors";
import cors from "cors";
import path from "path";

import noteRoutes from "./routes/note.route.js";
import userRoutes from "./routes/user.route.js";
import { errorHandler, notFound } from "./middlewares/error.middleware.js";

dotenv.config();
connectDB();

const app = express(); // main thing
app.use(cors());

app.use(express.json()); // to accept json data

app.use("/api/notes", noteRoutes);
app.use("/api/users", userRoutes);

// --------------------------deployment------------------------------
const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// --------------------------deployment------------------------------

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`.yellow
      .bold
  )
);
