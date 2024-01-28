import { getTransactionByidRepository } from '@/repositories/transactions/getTransactionById.repo';

export const getTransactionByIdAction = async (id: number) => {
  try {
    const eventId = await getTransactionByidRepository(id);
    return {
      status: 200,
      message: 'success',
      data: eventId,
    };
  } catch (error) {
    throw error;
  }
};
