import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import app from "./server";
import researchersRouter from "./routes/researchers.routes";

dotenv.config();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/researchers", researchersRouter);

app.get("/", (_req, res) => {
  res.send("API is running........");
});

export default app;
