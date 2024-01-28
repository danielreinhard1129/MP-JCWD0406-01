import { updateEventByIdRepository } from '@/repositories/events/updateEventById.repo';
import { statusTransactionRepository } from '@/repositories/transactions/statusTransaction.repo';

// interface Data {
//   uuid: any;
//   statusId: number;
//   eventId: number;
//   qty: number;
// }
export const statusFailedTransactionAction = async (data: any) => {
  try {
    console.log('status failed', data);

    const { uuid, statusId, eventId, qty } = data;
    const result = await statusTransactionRepository(uuid, statusId);

    await updateEventByIdRepository(eventId, qty);

    return {
      status: 400,
      message: 'Failed Acceptted Transaction',
      data: result,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
