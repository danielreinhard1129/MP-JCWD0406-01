import { forgotPasswordAction } from '@/actions/forgot.action';
import { keepLoginAction } from '@/actions/keeplogin.action';
import { loginUserAction } from '@/actions/login.action';
// import { claimCodeReferralAction } from '@/actions/referall/claimCodeReferall';
// import { claimReferallAction } from '@/actions/referall/claimReferallUser';
import { registerAction } from '@/actions/register.action';
import { resetPasswordAction } from '@/actions/reset.action';
import { createVoucherAction } from '@/actions/voucher/createVoucher';
import prisma from '@/prisma';
import { NextFunction, Request, Response } from 'express';

export class UserController {
  async getUserData(req: Request, res: Response, next: NextFunction) {
    try {
      //   const data = req.body;
      const result = await prisma.user.findMany({
        include: {
          Role: true,
          MyVoucher: {
            include: {
              voucher: true,
            },
          },
          Event: true,
        },
      });
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const result = await registerAction(data);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async loginUser(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;

      const result = await loginUserAction(data);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async keepLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const email = req.user?.email;
      console.log('data req user email', req.user?.email);

      const result = await keepLoginAction(email as string);

      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async forgotPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const email = req.body.email;

      const result = await forgotPasswordAction(email);

      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async resetPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const email = req.user!.email;
      const result = await resetPasswordAction(email, req.body);

      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async createVoucher(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await createVoucherAction(req.body);
      return res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }
}
