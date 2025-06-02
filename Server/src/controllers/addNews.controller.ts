import { Request, Response } from "express";
import addNews from "../services/addNews.service";

const addNewsController = async (req: Request, res: Response) => {
  const data = req.body;
  
  try {
    const newNews = await addNews(req.body);
    res.status(201).json(newNews);
  } catch (error) {
    res.status(500).json({ message: "Failed to create News", error });
  }
};

export default addNewsController;
