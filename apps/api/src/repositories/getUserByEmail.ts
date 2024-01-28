import prisma from '@/prisma';

export const getUserByEmailRepository = async (email: string) => {
  try {
    const result = await prisma.user.findUnique({
      where: { email },
      include: {
        Role: true,
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
