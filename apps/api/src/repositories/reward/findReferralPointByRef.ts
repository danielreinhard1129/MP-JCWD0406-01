import prisma from '@/prisma';

export const findReferralPointsByReferredId = async (userId: number) => {
  try {
    const result = await prisma.pointReferall.findUnique({
      where: {
        userId,
      },
    });
    return result;
  } catch (error) {}
};
