import { useReferralCodeAction } from '@/actions/reward/useReferrallCodeAction';
import { checkReferralCodeAction } from '@/actions/reward/checkReferallCodeAction';
import { NextFunction, Request, Response } from 'express';

export class RewardController {
  async checkReferralCode(req: Request, res: Response, next: NextFunction) {
    try {
      const { codeReferall } = req.body;
      const result = await checkReferralCodeAction(codeReferall);
      return res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async useReferralCode(req: Request, res: Response, next: NextFunction) {
    try {
      const { codeReferall, userId } = req.body;
      const result = await useReferralCodeAction(codeReferall, userId);
      res.status(result.status).send(result);
    } catch (error) {}
  }
}
