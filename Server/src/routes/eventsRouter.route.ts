import { Router } from "express";
import fetchEvents from "../controllers/events.controller";

const eventsRouter = Router();

eventsRouter.get("/", fetchEvents);

export default eventsRouter;
