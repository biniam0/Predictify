import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import app from "./server";
import { auth } from "./lib/auth";
import { toNodeHandler } from "better-auth/node";
import researchersRouter from "./routes/researchers.routes";
import addResearchersRoute from "./routes/addResearchers.route";
import newsRouter from "./routes/newsRouter.routes";
import addNewsRoute from "./routes/addNews.route";
import addStoriesRoute from "./routes/addStories";
import addEventsRoute from "./routes/addEvents.route";
import addFocusRoute from "./routes/addFocus.route";

dotenv.config();

const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.all(
  "/api/auth/{*any}",
  (req, res, next) => {
    console.log("Cookies:", req.headers.cookie);
    next();
  },
  toNodeHandler(auth)
);

app.use(express.json());

app.use("/researchers", researchersRouter);
app.use("/add-researcher", addResearchersRoute);
app.use("/add-news", addNewsRoute);
app.use("/add-stories", addStoriesRoute);
app.use("/add-event", addEventsRoute);
app.use("/add-focus", addFocusRoute);
app.use("/news", newsRouter);

app.get("/", (_req, res) => {
  res.send("API is running........");
});

export default app;
