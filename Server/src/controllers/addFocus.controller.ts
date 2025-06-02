import { Request, Response } from "express";
import addFocus from "../services/addFocus.service";

const addFocusController = async (req: Request, res: Response) => {
  const data = req.body;

  try {
    const newFocus = await addFocus(req.body);
    res.status(201).json(newFocus);
  } catch (error) {
    res.status(500).json({ message: "Failed to create Focus", error });
  }
};

export default addFocusController;
