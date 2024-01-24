import prisma from '@/prisma';

export const getNewReleaseEvents = async () => {
  try {
    const newRelease = await prisma.event.findMany({
      orderBy: { createdAt: 'desc' },
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
    return newRelease;
  } catch (error) {
    throw error;
  }
};
