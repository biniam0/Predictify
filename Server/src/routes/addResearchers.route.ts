import { Router } from "express";
import addResearcherController from "../controllers/addResearcher.controller";

const addResearchersRoute = Router();

addResearchersRoute.post("/", addResearcherController);

export default addResearchersRoute;
