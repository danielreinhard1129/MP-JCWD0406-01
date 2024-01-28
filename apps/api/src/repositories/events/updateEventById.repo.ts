import prisma from '@/prisma';

export const updateEventByIdRepository = async (id: number, qty: number) => {
  try {
    const result = await prisma.event.updateMany({
      where: {
        id,
      },
      data: {
        booked: {
          decrement: qty,
        },
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};
