import prisma from '@/prisma';
import { IUser } from '@/types/user.type';

export const createUserRepository = async (data: IUser) => {
  try {
    const result = await prisma.user.create({ data });
    return result;
  } catch (error) {
    throw error;
  }
};
