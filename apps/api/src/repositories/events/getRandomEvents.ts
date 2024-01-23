import prisma from '@/prisma';

export const getRandomEvents = async () => {
  try {
    const allEvents = await prisma.event.findMany({
      include: {
        location: true,
        user: {
          select: {
            first_name: true,
            last_name: true,
            username: true,
            email: true,
          },
        },
      },
    });

    const randomEvents = allEvents.sort(() => Math.random() - 0.5);

    return randomEvents;
  } catch (error) {
    throw error;
  }
};
