import { findUserById } from '@/repositories/findUserById';
import { findAllUser } from '@/repositories/getAlluser';
import { getAllTransactionRepository } from '@/repositories/transactions/getAllTransaction.repo';
import { IUser } from '@/types/user.type';

export const getAllUserTransactionAction = async () => {
  try {
    const result = await getAllTransactionRepository();

    return {
      status: 200,
      message: 'succes get data Transaction',
      data: result,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
