import { getNewReleaseEvents } from '@/repositories/events/getNewReleaseEvents';

export const getNewReleaseEventsAction = async () => {
  try {
    const newRelease = await getNewReleaseEvents();

    return {
      status: 200,
      message: 'success',
      data: newRelease,
    };
  } catch (error) {
    throw error;
  }
};
