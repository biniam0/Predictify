import prisma from "../models/prisma";

const getStories = async () => {
  const news = await prisma.story.findMany();
  return news
};

export default getStories
