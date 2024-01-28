import prisma from '@/prisma';

export const updatePointTransactionRepository = async (
  pointUpdateId: number,
) => {
  try {
    const result = await prisma.pointReferall.updateMany({
      where: { userId: pointUpdateId },
      data: { pointEarned: 0 },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
