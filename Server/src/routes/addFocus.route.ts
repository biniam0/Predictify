import { Router } from "express";
import addFocusController from "../controllers/addFocus.controller";

const addFocusRoute = Router();

addFocusRoute.post("/", addFocusController);

export default addFocusRoute;
