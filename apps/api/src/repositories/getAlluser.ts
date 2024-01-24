import prisma from '@/prisma';
import { IUser } from '@/types/user.type';

export const findAllUser = async () => {
  try {
    const user = await prisma.user.findMany({
      orderBy: {
        id: 'desc',
      },
      include: {
        Role: true,
      },
    });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
