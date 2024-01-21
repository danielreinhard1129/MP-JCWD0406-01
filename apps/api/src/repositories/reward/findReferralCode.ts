import prisma from '@/prisma';
import React from 'react';

export const findReferralCode = async (codeReferall: string) => {
  try {
    const result = await prisma.user.findUnique({
      where: {
        codeReferall,
      },
    });
    return result;
  } catch (error) {}
};
