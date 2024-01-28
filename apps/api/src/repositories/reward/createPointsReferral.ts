import prisma from '@/prisma';
import { IPointsReferral } from '@/types/point.type';

export const createPointsReferral = async (data: IPointsReferral) => {
  try {
    const { userId, pointEarned, expiresOn } = data;
    const result = await prisma.pointReferall.create({
      data: {
        userId,
        pointEarned,
        expiresOn,
      },
    });
  } catch (error) {}
};
