import prisma from "../models/prisma";

interface Story {
  id?: number;
  title: string;
  author?: string;
  excerpt?: string;
  imageUrl?: string;
  link: string;
}

const addStories = async (data: Story) => {
  const Stories = await prisma.story.create({
    data: {
      title: data.title,
      excerpt: data.excerpt,
      link: data.link,
      imageUrl: data.imageUrl,
    },
  });

  return Stories;
};

export default addStories;
