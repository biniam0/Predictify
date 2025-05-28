import prisma from "../models/prisma";

const getResearchers = async () => {
  return await prisma.researcher.findMany();
};

export default getResearchers;
