import prisma from '@/prisma';

export const getUserByUsernameRepository = async (username: string) => {
  try {
    const result = await prisma.user.findUnique({
      where: { username },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
