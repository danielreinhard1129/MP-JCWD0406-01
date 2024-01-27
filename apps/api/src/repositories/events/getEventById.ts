import prisma from '@/prisma';

export const getEventByIdRepo = async (id: number) => {
  try {
    const eventId = await prisma.event.findUnique({
      where: { id },
      include: {
        Event_category: {
          include: {
            category: true,
          },
        },
        location: {
          select: {
            city: true,
            country: true,
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

    return eventId;
  } catch (error) {
    throw error;
  }
};
