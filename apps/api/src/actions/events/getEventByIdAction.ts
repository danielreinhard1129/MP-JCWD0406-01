import { getEventByIdRepo } from '@/repositories/events/getEventById';

export const getEventByIdAction = async (id: number) => {
  try {
    const eventId = await getEventByIdRepo(id);
    return {
      status: 200,
      message: 'success',
      data: eventId,
    };
  } catch (error) {
    throw error;
  }
};
