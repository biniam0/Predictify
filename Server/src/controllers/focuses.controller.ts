import { Request, Response } from "express"
import getFocuses from "../services/focuses.service"

const fetchFocuses = async (req: Request, res: Response) => {
    const news = await getFocuses()
    res.status(200).json(news)
}

export default fetchFocuses