import prisma from '@/prisma';
import { IMyVoucher, IVoucher } from '@/types/voucher.type';

export const createVoucheUserRepo = async (
  dataVoucher : IMyVoucher
) => {
    try {
      const {userId, voucherId, expiredDate} = dataVoucher
    const result = await prisma.myVoucher.create({
      data: {
        userId ,
        voucherId ,
        expiredDate ,
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};