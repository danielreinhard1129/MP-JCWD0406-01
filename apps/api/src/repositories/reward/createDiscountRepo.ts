import prisma from '@/prisma';
import { IDiscount } from '@/types/point.type';

export const createDiscontRepo = async (data: IDiscount) => {
  try {
    const { couponCode, userId, expiresOn, discountPersentase } = data;
    const result = await prisma.couponUser.create({
      data: {
        userId,
        couponCode,
        discountPersentase,
        expiresOn,
      },
    });
    return result;
  } catch (error) {}
};
