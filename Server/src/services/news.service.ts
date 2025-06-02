import prisma from "../models/prisma";

const getNews = async () => {
  const news = await prisma.news.findMany();
  console.log(news)
  return news
};

export default getNews
