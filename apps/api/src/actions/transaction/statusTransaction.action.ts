import { statusTransactionRepository } from '@/repositories/transactions/statusTransaction.repo';

interface Data {
  uuid: any;
  statusId: number;
  eventId: number;
  qty: number;
}
export const statusAccTransactionAction = async (data: any) => {
  try {
    console.log(data);

    const { uuid, statusId } = data;
    const result = await statusTransactionRepository(uuid.uuid, statusId);

    return {
      status: 200,
      message: 'succes Acceptted Transaction',
      data: result,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
