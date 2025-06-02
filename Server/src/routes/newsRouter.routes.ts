import { Router } from "express";
import fetchNews from "../controllers/news.controller";

const newsRouter = Router()

newsRouter.get("/", fetchNews)

export default newsRouter