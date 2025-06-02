import { Request, Response } from "express"
import getStories from "../services/stories.service"

const fetchStories = async (req: Request, res: Response) => {
    const news = await getStories()
    res.status(200).json(news)
}

export default fetchStories