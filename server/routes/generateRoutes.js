import express from "express";
import isAuth from "../middlewares/isAuth.js";
import { generateNotes } from "../controllers/generateController.js";
import { getMyNotes, getSingleNotes } from "../controllers/notesController.js";

const notesRouter = express.Router();

notesRouter.post("/generate-notes", isAuth, generateNotes);
notesRouter.get("/getnotes", isAuth, getMyNotes);
notesRouter.get("/:id", isAuth, getSingleNotes);

export default notesRouter;
