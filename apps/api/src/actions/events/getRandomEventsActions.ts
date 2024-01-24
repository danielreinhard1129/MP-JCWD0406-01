import { getRandomEvents } from '@/repositories/events/getRandomEvents';

export const getRandomEventsAction = async () => {
  try {
    const randomEvents = await getRandomEvents();

    return {
      status: 200,
      message: 'success',
      data: randomEvents,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
