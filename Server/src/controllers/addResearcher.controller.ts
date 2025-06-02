import { Request, Response } from "express";
import addResearcher from "../services/addResearcher.service";

const addResearcherController = async (req: Request, res: Response) => {
  const data = req.body;
  console.log(data)
  try {
    const newResearcher = await addResearcher(req.body);
    res.status(201).json(newResearcher);
  } catch (error) {
    res.status(500).json({ message: "Failed to create researcher", error });
  }
};

export default addResearcherController;
