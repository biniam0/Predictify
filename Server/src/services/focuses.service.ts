import prisma from "../models/prisma";

const getFocuses = async () => {
  const news = await prisma.thematicFocus.findMany();
  console.log(news)
  return news
};

export default getFocuses
