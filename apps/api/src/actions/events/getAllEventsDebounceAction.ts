import { getAllEventsDebounce } from '@/repositories/events/getAllEventsDebounceSearch';

export const getAllEventsDebounceAction = async () => {
  try {
    const events = await getAllEventsDebounce();

    return {
      status: 200,
      message: 'success',
      data: events,
    };
  } catch (error) {
    throw error;
  }
};
