import { Router } from "express";
import fetchCurrentUser from "../controllers/currentUser.controller";

const currentUserRoute = Router();

currentUserRoute.post("/", fetchCurrentUser);

export default currentUserRoute;
