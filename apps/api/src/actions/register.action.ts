import { nanoid } from '@/helpers/codeReferall';
import { hashPassword } from '@/lib/bcrypt';
import { createUserRepository } from '@/repositories/createUser.repo';
import { getUserByEmailRepository } from '@/repositories/getUserByEmail';
import { createDiscontRepo } from '@/repositories/reward/createDiscountRepo';
import { createPointsReferral } from '@/repositories/reward/createPointsReferral';
import { findReferralCode } from '@/repositories/reward/findReferralCode';
import { findReferralPointsByReferredId } from '@/repositories/reward/findReferralPointByRef';
import { updatePointReferral } from '@/repositories/reward/updatePointReferral';
import { IDiscount, IPointsReferral } from '@/types/point.type';

import { IUser } from '@/types/user.type';
import { addMonths, format } from 'date-fns';

export const registerAction = async (data: IUser) => {
  try {
    console.log(data);

    const referred = data.codeReferall;
    const { email, password } = data;
    const emailExist = await getUserByEmailRepository(email);
    if (emailExist) throw new Error('email Already exist');
    data.codeReferall = nanoid();
    const hashedPassword = await hashPassword(password);
    data.password = hashedPassword;

    data.codeReferall = nanoid();

    const user = await createUserRepository(data);
    if (referred && user.roleId !== 2) {
      const userReferral = await findReferralCode(referred);
      if (userReferral?.roleId === 2) {
        return { message: 'Register new user success' };
      }
      if (!userReferral)
        return { status: 404, message: 'Referral code is not found' };
      const currentDate = new Date();
      const futureDate = addMonths(currentDate, 3);
      const formatDate = format(futureDate, 'yyyy-MM-dd HH:mm:ss');
      const dataDiscount: IDiscount = {
        userId: user.id,
        couponCode: `${user.codeReferall}-discount`,
        discountPersentase: 10,
        expiresOn: new Date(formatDate),
      };
      await createDiscontRepo(dataDiscount);

      const userPoints = await findReferralPointsByReferredId(userReferral.id);
      console.log(userPoints);

      if (!userPoints) {
        const dataPoints: IPointsReferral = {
          userId: userReferral.id,
          pointEarned: 10000,
          expiresOn: new Date(formatDate),
        };
        await createPointsReferral(dataPoints);
      } else {
        await updatePointReferral(userPoints.userId, {
          pointEarned: userPoints.pointEarned + 10000,
        });
      }
    }
    return {
      status: 200,
      message: 'register berhasil',
    };
  } catch (error) {
    throw error;
  }
};
