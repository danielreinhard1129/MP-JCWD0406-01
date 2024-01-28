import { getTransactionsDate } from '@/repositories/transactions/getTransactionsDate.repo';

export const getTransactionsByDateAction = async () => {
  try {
    const week = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const getWeek = await getTransactionsDate(week);

    const month = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const getMonth = await getTransactionsDate(month);

    const year = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);
    const getYear = await getTransactionsDate(year);

    // const date = await getTransactionsDate(startTime, endTime);

    return {
      message: 'get Transactions by date success',
      status: 200,
      data: { getWeek, getMonth, getYear },
    };
  } catch (error) {
    throw error;
  }
};
