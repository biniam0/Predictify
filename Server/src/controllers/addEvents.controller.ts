import { Request, Response } from "express";
import addEvents from "../services/addEvents.service";

const addEventsController = async (req: Request, res: Response) => {
  const data = req.body;

  try {
    const newEvents = await addEvents(req.body);
    res.status(201).json(newEvents);
  } catch (error) {
    res.status(500).json({ message: "Failed to create Events", error });
  }
};

export default addEventsController;
