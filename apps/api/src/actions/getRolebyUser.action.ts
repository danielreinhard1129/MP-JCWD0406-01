import { findUserById } from '@/repositories/findUserById';

export const getUserbyIdAction = async (userId: number) => {
  try {
    const result = await findUserById(userId);
    return {
      status: 200,
      message: 'succes get date data',
      data: result,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
