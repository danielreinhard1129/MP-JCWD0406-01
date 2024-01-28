import { updateEventByIdRepository } from '@/repositories/events/updateEventById.repo';
import { statusTransactionRepository } from '@/repositories/transactions/statusTransaction.repo';

interface Data {
  uuid: any;
  statusId: number;
  eventId: number;
  qty: number;
}
export const statusFailedTransactionAction = async (data: any) => {
  try {
    const { uuid, statusId, eventId, qty } = data;
    const result = await statusTransactionRepository(uuid.uuid, statusId);
    const updateEvent = await updateEventByIdRepository(eventId, qty);

    return {
      status: 400,
      message: 'Failed Acceptted Transaction',
      data: result,
      event: updateEvent,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
