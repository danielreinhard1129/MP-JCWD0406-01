import { getAllEvents } from '@/repositories/events/getAllEvents';

export const getAllEventAction = async () => {
  try {
    const eventData = await getAllEvents();

    return {
      status: 200,
      message: 'success',
      data: eventData,
    };
  } catch (error) {
    throw error;
  }
};
