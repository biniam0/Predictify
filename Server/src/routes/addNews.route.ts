import { Router } from "express";
import addNewsController from "../controllers/addNews.controller";

const addNewsRoute = Router();

addNewsRoute.post("/", addNewsController);

export default addNewsRoute;
