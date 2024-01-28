import prisma from '@/prisma';

export const findUserById = async (id: number) => {
  try {
    const user = await prisma.user.findMany({
      where: { id },
      include: {
        Role: true,
        Event: true,
        CouponUser: true,
        _count: {
          select: {
            Transaction: true,
            CouponUser: true,
            Event: true,
          },
        },
      },
    });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
