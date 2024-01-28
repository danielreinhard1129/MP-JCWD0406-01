import prisma from '@/prisma';

export const getTransactionByidRepository = async (id: number) => {
  try {
    const user = await prisma.transaction.findMany({
      where: { userId: id },
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
