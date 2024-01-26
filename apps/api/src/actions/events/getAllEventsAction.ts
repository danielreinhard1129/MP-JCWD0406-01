import { getAllEvents } from '@/repositories/events/getAllEvents';

export const getAllEventAction = async (page: number, pageSize: number) => {
  try {
    const eventData = await getAllEvents(page, pageSize);

    return {
      status: 200,
      message: 'success',
      data: eventData,
    };
  } catch (error) {
    throw error;
  }
};
