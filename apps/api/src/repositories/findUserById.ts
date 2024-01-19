import prisma from '@/prisma';

export const findUserById = async (id: number) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
