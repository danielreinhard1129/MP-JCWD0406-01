import { findUserById } from '@/repositories/findUserById';

export const getRolebyUserAction = async (id: number) => {
  try {
    const getTweet = await findUserById(id);
    if (!getTweet) {
      return {
        status: 404,
        message: 'data not found',
      };
    }
    return {
      status: 200,
      message: 'succes get date data',
      data: getTweet,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
