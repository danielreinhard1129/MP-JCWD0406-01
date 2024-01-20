import { createToken } from '@/lib/jwt';
import { comparePassword } from '@/lib/bcrypt';
import { IUser } from '@/types/user.type';
import { excludeFields } from '@/helpers/excludeFields';
import { getUserByEmailRepository } from '@/repositories/getUserByEmail';
import { ILogin } from '@/types/voucher.type';
import { getUserByUsernameRepository } from '@/repositories/getUserByUsername';

export const loginUserAction = async (body: ILogin) => {
  try {

    let user;
    if (body.usernameOrEmail.includes("@")) {
      user = await getUserByEmailRepository(body.usernameOrEmail);
    } else {
      user = await getUserByUsernameRepository(body.usernameOrEmail);
    }
    if (!user) {
      return {
        status: 404,
        message: "account not found",
      };
    }
    const isPasswordValid = await comparePassword(body.password, user.password);
    if (!isPasswordValid) throw new Error('invalid Password');

    const dataWithoutPassword = excludeFields(user, ['password']);

    const token = createToken({ email: user.email });

    return {
      message: 'login berhasil',
      data: dataWithoutPassword,
      token,
    };
  } catch (error) {
    throw error;
  }
};
