import { findReferralCode } from '@/repositories/reward/findReferralCode';
import { addMonths, format } from 'date-fns';
import { createPointsReferral } from '../../repositories/reward/createPointsReferral';
import { findReferralPointsByReferredId } from '@/repositories/reward/findReferralPointByRef';
import { IDiscount, IPointsReferral } from '@/types/point.type';
import { findUserById } from '@/repositories/findUserById';
import { createDiscontRepo } from '@/repositories/reward/createDiscountRepo';

export const useReferralCodeAction = async (
  codeReferall: string,
  userId: number,
) => {
  try {
    const userReferral = await findReferralCode(codeReferall);
    const isHasUse = await findReferralPointsByReferredId(userId);
    const user = await findUserById(userId);
    if (!userReferral) return { status: 404, message: 'referral is not found' };
    if (!user) return { status: 404, message: 'user is not found' };
    if (isHasUse) return { status: 409, message: 'code referal has used' };
    const currentDate = new Date();

    const futureDate = addMonths(currentDate, 3);
    const formattedDate = format(futureDate, 'yyyy-MM-dd HH:mm:ss');

    const dataDiscount: IDiscount = {
      couponCode: `${codeReferall}-Discount`,
      expiresOn: new Date(formattedDate),
      userId,
      discountPersentase: 10,
    };
    const dataPoints: IPointsReferral = {
      pointEarned: 10000,
      userId: userReferral.id,
      expiresOn: new Date(formattedDate),
    };
    await createDiscontRepo(dataDiscount);
    await createPointsReferral(dataPoints);
    return {
      status: 200,
      message: 'Anda mendapatkan Discount 10%',
    };
  } catch (error) {
    throw error;
  }
};
