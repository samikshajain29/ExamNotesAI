import express from "express";
import dotenv from "dotenv";
import connectDb from "./utils/db.js";
import authRouter from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/userRoutes.js";
import notesRouter from "./routes/generateRoutes.js";
import pdfRouter from "./routes/pdfRoutes.js";
import creditRouter from "./routes/creditsRoutes.js";
import { stripeWebhook } from "./controllers/creditsController.js";
dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.post(
  "/api/credits/webhook",
  express.raw({ type: "application/json" }),
  stripeWebhook,
);

app.use(
  cors({
    origin: "https://examnotesaiclient-zqxj.onrender.com",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  }),
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/notes", notesRouter);
app.use("/api/pdf", pdfRouter);
app.use("/api/credit", creditRouter);

app.listen(port, () => {
  connectDb();
  console.log(`server running on ${port}`);
});
