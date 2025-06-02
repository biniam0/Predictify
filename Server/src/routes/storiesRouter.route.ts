import { Router } from "express";
import fetchStories from "../controllers/stories.controller";

const storiesRouter = Router()

storiesRouter.get("/", fetchStories)

export default storiesRouter