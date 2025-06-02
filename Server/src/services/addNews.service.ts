import prisma from "../models/prisma";

type News = {
  title: string;
  publishedAt: Date | string;
  description?: string | null;
  link: string;
  imageUrl?: string | null;
};

const addNews = async (data: News) => {
  const news = await prisma.news.create({
    data: {
      title: data.title,
      description: data.description,
      link: data.link,
      imageUrl: data.imageUrl,
      publishedAt: new Date(data.publishedAt), // Ensure proper Date object
    },
  });

  return news;
};

export default addNews;
