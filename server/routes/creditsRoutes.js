import express from "express";
import isAuth from "../middlewares/isAuth.js";
import { createCreditsOrder } from "../controllers/creditsController.js";

const creditRouter = express.Router();
creditRouter.post("/order", isAuth, createCreditsOrder);

export default creditRouter;
