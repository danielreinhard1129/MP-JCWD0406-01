import { findUserById } from '@/repositories/findUserById';
import { findAllUser } from '@/repositories/getAlluser';
import { IUser } from '@/types/user.type';

export const getAllUserAction = async () => {
  try {
    const result = await findAllUser();

    return {
      status: 200,
      message: 'succes get date user',
      data: result,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
