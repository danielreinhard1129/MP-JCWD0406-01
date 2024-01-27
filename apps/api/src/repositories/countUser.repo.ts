import prisma from '@/prisma';

export const userAggregations = await prisma.user.aggregate({
  _count: {
    id: true,
  },
});
