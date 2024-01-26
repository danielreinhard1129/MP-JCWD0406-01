// import prisma from '@/prisma';
// import { IMyVoucher, IVoucher } from '@/types/voucher.type';

// export const createVoucheUserRepo = async (dataVoucher: IMyVoucher) => {
//   try {
//     const { userId, startDate } = dataVoucher;
//     const result = await prisma.voucher.create({
//       data: {
//         userId,
//         startDate,
//       },
//     });
//     return result;
//   } catch (error) {
//     throw error;
//   }
// };
