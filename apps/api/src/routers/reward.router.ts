import { RewardController } from '@/controllers/reward.controller';
import { Router } from 'express';

export class RewardRouter {
  private router: Router;
  private rewardController: RewardController;

  constructor() {
    this.rewardController = new RewardController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      '/check-referral',
      this.rewardController.checkReferralCode,
    );
    this.router.post('/use-referral', this.rewardController.useReferralCode);
  }

  getRouter(): Router {
    return this.router;
  }
}
