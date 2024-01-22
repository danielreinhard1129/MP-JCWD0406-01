import prisma from '@/prisma';

export const getAllEvents = async () => {
  try {
    const eventData = await prisma.event.findMany();

    return eventData;
  } catch (error) {
    throw error;
  }
};
