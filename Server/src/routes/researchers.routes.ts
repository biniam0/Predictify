import { Router } from "express";
import fetchResearchers from "../controllers/researchers.controller";

const researchersRouter = Router();

researchersRouter.get("/", fetchResearchers);

export default researchersRouter;
