import express from "express";
import isAuth from "../middlewares/isAuth";
import { generateNotes } from "../controllers/generateController.js";

const notesRouter = express.Router();

notesRouter.post("/generate-notes", isAuth, generateNotes);

export default notesRouter;
