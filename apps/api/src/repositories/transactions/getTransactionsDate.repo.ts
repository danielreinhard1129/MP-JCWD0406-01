import prisma from '@/prisma';

export const getTransactionsDate = async (
  startTime: Date,
  // endTime: string,
) => {
  try {
    const result = await prisma.transaction.aggregate({
      _sum: {
        total: true,
      },
      where: {
        // AND: [
        // {
        createdAt: {
          gte: startTime,
        },
        // },
        // {
        //   createdAt: {
        //     lte: endTime,
        //   },
        // },
        // ],
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
