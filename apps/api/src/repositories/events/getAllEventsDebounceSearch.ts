import prisma from '@/prisma';

export const getAllEventsDebounce = async () => {
  try {
    const events = await prisma.event.findMany({
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
    });
    return events;
  } catch (error) {
    throw error;
  }
};
