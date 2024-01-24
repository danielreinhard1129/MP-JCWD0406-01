import prisma from '@/prisma';

export const getAllEvents = async () => {
  try {
    const eventData = await prisma.event.findMany({
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

    return eventData;
  } catch (error) {
    throw error;
  }
};
