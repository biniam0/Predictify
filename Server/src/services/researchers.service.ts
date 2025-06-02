import prisma from "../models/prisma";

const addResearcher = async () => {
  return await prisma.researcher.findMany();
};

export default addResearcher;
