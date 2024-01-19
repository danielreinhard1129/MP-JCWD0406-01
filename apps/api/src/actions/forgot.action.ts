import { createToken } from '@/lib/jwt';
import { transporter } from '@/lib/nodemailer';
import { getUserByEmailRepository } from '@/repositories/getUserByEmail';

export const forgotPasswordAction = async (email: string) => {
  try {
    const user = await getUserByEmailRepository(email);
    if (!user) throw new Error('Account not found');

    const token = createToken({ email: user.email });
    const baseUrl = 'http://localhost:3000/';
    const link = baseUrl + `/reset-password?token=${token}`;

    await transporter.sendMail({
      from: 'sender',
      to: email,
      subject: ' Reset Pass link',
      html: `<h1><a href="${link}"> sini behasil reset</a><h1>`,
    });
    return {
      message: 'forgotpass berhasil',
    };
  } catch (error) {
    throw error;
  }
};
 