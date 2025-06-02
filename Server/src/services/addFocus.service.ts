import prisma from "../models/prisma";

interface Focus {
  id?: number;
  title: string;
  description: string;
  imageUrl?: string;
}

const addFocus = async (data: Focus) => {
  const newFocus = await prisma.thematicFocus.create({
    data: {
      title: data.title,
      description: data.description,
      imageUrl: data.imageUrl,
    },
  });

  return newFocus;
};

export default addFocus;
