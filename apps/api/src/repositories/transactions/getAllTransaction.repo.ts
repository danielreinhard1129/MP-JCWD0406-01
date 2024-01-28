import prisma from '@/prisma';
import { IUser } from '@/types/user.type';

export const getAllTransactionRepository = async () => {
  try {
    const user = await prisma.transaction.findMany({
      orderBy: {
        id: 'desc',
      },
      include: {
        user: {
          select: {
            username: true,
          },
        },
        event: true,
        TransactionDiscount: true,
        status: true,
      },
    });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
