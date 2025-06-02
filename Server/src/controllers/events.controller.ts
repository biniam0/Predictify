import { Request, Response } from "express"
import getEvents from "../services/events.service"

const fetchEvents = async (req: Request, res: Response) => {
    const news = await getEvents()
    res.status(200).json(news)
}

export default fetchEvents