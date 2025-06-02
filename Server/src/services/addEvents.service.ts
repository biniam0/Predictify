import prisma from "../models/prisma";

interface Event {
  id?: number;
  title: string;
  location?: string;
  date: string; // from input[type="date"]
  description?: string;
  imageUrl?: string;
}

const addEvent = async (data: Event) => {
  const newEvent = await prisma.event.create({
    data: {
      title: data.title,
      location: data.location,
      eventDate: new Date(data.date),
      description: data.description,
      imageUrl: data.imageUrl,
    },
  });

  return newEvent;
};

export default addEvent;
