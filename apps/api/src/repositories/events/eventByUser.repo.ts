import prisma from '@/prisma';

export const getEventByUserRepository = async (userId: number) => {
  try {
    const getTweet = await prisma.event.findMany({
      where: {
        userId,
      },
      include: {
        user: true,
        location: true,
      },
    });

    return getTweet;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
