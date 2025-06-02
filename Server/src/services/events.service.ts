import prisma from "../models/prisma";

const getEvents = async () => {
  const news = await prisma.event.findMany();
  console.log(news)
  return news
};

export default getEvents
