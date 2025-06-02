import { Router } from "express";
import addStoriesController from "../controllers/addStories.controller";

const addStoriesRoute = Router();

addStoriesRoute.post("/", addStoriesController);

export default addStoriesRoute;
