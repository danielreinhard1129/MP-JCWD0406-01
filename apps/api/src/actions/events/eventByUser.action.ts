import { getEventByUserRepository } from '@/repositories/events/eventByUser.repo';

export const getEventByUserAction = async (userId: number) => {
  try {
    const getTweet = await getEventByUserRepository(userId);
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
