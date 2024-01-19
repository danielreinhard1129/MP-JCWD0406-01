import prisma from '@/prisma';

export const getUserByEmailRepository = async (email: string) => {
  try {
    const result = await prisma.user.findUnique({
      where: { email },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
