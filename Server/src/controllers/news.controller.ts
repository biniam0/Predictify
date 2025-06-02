import { Request, Response } from "express"
import getNews from "../services/news.service"

const fetchNews = async (req: Request, res: Response) => {
    const news = await getNews()
    res.status(200).json(news)
}

export default fetchNews