import prisma from '@/prisma';
import { IPointsReferral } from '@/types/point.type';

export const createPointsReferral = async (data: IPointsReferral) => {
  try {
    const { referredUserId, referrerUserId, pointEarned, expiresOn } = data;
    const result = await prisma.pointReferall.create({
      data: {
        referredUserId,
        referrerUserId,
        pointEarned,
        expiresOn,
      },
    });
  } catch (error) {}
};
