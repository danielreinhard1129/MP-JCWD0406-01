import prisma from '@/prisma';

export const getAllEvents = async (page: number, pageSize: number) => {
  try {
    const eventData = await prisma.event.findMany({
      include: {
        location: true,
        Event_category: {
          include: {
            category: true,
          },
        },

        user: {
          select: {
            first_name: true,
            last_name: true,
            username: true,
            email: true,
          },
        },
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    return eventData;
  } catch (error) {
    throw error;
  }
};
