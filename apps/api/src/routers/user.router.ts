import { UserController } from '@/controllers/users.controller';
import { verifyToken } from '@/middleware/jwtVerifyToken';
import { Router } from 'express';

export class UserRouter {
  private router: Router;
  private userController: UserController;

  constructor() {
    this.userController = new UserController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.userController.getUserData);
    this.router.post('/register', this.userController.registerUser);
    this.router.post('/login', this.userController.loginUser);
    this.router.get('/keep', verifyToken, this.userController.keepLogin);
    this.router.post('/forgot', this.userController.forgotPassword);
    this.router.get('/:id', this.userController.getUserbyId);
    this.router.patch('/reset', verifyToken, this.userController.resetPassword);

    // this.router.post(
    //   '/referall-user',
    //   this.userController.claimReferralCode,
    // );
    // this.router.post('/claim-referall', this.userController.claimReferall);

    this.router.post('/voucher', this.userController.createVoucher);
  }

  getRouter(): Router {
    return this.router;
  }
}
