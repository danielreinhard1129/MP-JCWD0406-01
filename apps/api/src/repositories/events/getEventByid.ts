import prisma from '@/prisma';

export const getEventByIdRepository = async (userId: number) => {
  try {
    const getEvent = await prisma.event.findMany({
      where: {
        userId,
      },
      include: {
        user: true,
      },
      orderBy: {
        id: 'desc',
      },
    });
    return getEvent;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
