import { findUserById } from '@/repositories/findUserById';
import { findReferralCode } from '@/repositories/reward/findReferralCode';
import { findReferralPointsByReferredId } from '@/repositories/reward/findReferralPointByRef';

export const checkReferralCodeAction = async (
  codeReferall: string,
  // userId: number,
) => {
  try {
    const userReferral = await findReferralCode(codeReferall);
    // const user = await findUserById(userId);
    // const hasUse = await findReferralPointsByReferredId(userId);

    if (!userReferral) return { status: 404, message: 'referral is not found' };
    // if (!user) return { status: 404, message: 'user is not found' };
    // if (hasUse) return { status: 409, message: 'code referal has used' };

    return {
      status: 200,
      message: 'Referral Code is Valid',
    };
  } catch (error) {
    throw error;
  }
};
