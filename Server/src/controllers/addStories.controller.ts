import { Request, Response } from "express";
import addStories from "../services/addStories.service";

const addStoriesController = async (req: Request, res: Response) => {
  const data = req.body;
  
  try {
    const newStories = await addStories(req.body);
    res.status(201).json(newStories);
  } catch (error) {
    res.status(500).json({ message: "Failed to create Stories", error });
  }
};

export default addStoriesController;
