import { excludeFields } from '@/helpers/excludeFields';
import { hashPassword } from '@/lib/bcrypt';
import { getUserByEmailRepository } from '@/repositories/getUserByEmail';
import { updateUserRepository } from '@/repositories/updateUser';

interface Data {
  password: string;
  confirmPassword: string;
}

export const resetPasswordAction = async (email: string, data: Data) => {
  try {
    const { password, confirmPassword } = data;

    if (password !== confirmPassword) throw new Error('Pass dont match');
    const user = await getUserByEmailRepository(email);

    if (!user) throw new Error('Account not found');
    const hashedPassword = await hashPassword(password);

    await updateUserRepository(email, { password: hashedPassword });

    return {
      message: 'reset berhasil',
    };
  } catch (error) {
    throw error;
  }
};
