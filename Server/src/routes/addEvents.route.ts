import { Router } from "express";
import addEventsController from "../controllers/addEvents.controller";

const addEventsRoute = Router();

addEventsRoute.post("/", addEventsController);

export default addEventsRoute;
