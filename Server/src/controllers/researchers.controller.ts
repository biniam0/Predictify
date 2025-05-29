import { Request, Response } from "express";
import getResearchers from "../services/researchers.service";

const fetchResearchers = async (req: Request, res: Response) => {
  const researchers = await getResearchers();
  res.status(200).json(researchers);
};

export default fetchResearchers;
