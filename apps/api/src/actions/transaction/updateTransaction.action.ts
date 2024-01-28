import { updatePointTransactionRepository } from '@/repositories/transactions/updaPointTransaction.repo';

interface Data {
  pointUpdateId: number;
}
export const updateTransactionAction = async (data: Data) => {
  try {
    console.log(data);

    const { pointUpdateId } = data;
    await updatePointTransactionRepository(pointUpdateId);

    return {
      status: 200,
      message: 'Point Berhasil Digunakan',
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
