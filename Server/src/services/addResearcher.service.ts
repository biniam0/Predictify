import prisma from "../models/prisma";
import { Researcher } from "@prisma/client"; // only if you use generated types

type ResearcherInput = {
  name: string;
  field: string;
  institution?: string;
  imageUrl?: string;
  bio?: string;
};

const addResearcher = async (data: ResearcherInput) => {
  const researcher = await prisma.researcher.create({
    data,
  });
  return researcher;
};

export default addResearcher;
