// import prisma from '@/prisma';
// import { IVoucher } from '@/types/voucher.type';
// import { body } from 'express-validator';

// export const createVoucherRepository = async (body: IVoucher) => {
//   const { userId, nameVoucher, discountPercentage } = body;

//   try {
//     const result = await prisma.voucher.create({
//       data: {
//         userId,
//         nameVoucher,
//         discountPercentage,
//       },
//     });
//     return result;
//   } catch (error) {
//     throw error;
//   }
// };
