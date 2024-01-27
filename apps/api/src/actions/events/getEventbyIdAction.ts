import { getEventByIdRepository } from '@/repositories/events/getEventByid';

export const getEventByIdAction = async (userId: number) => {
  try {
    const getEvent = await getEventByIdRepository(userId);
    return {
      status: 200,
      message: 'succes get event data',
      data: getEvent,
    };
  } catch (error) {
    throw error;
  }
};
