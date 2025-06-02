import { Router } from "express";
import fetchFocuses from "../controllers/focuses.controller";

const focusesRouter = Router();

focusesRouter.get("/", fetchFocuses);

export default focusesRouter;
