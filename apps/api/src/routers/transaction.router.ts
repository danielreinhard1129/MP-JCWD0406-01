import { SampleController } from '@/controllers/sample.controller';
import { TransactionController } from '@/controllers/transaction.controller';
import { Router } from 'express';

export class TransactionRouter {
  private router: Router;
  private transactionController: TransactionController;

  constructor() {
    this.transactionController = new TransactionController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(
      '/',
      this.transactionController.getAllTransactionController,
    );
    this.router.get(
      '/:id',
      this.transactionController.getTransactionbyIdController,
    );

    this.router.patch(
      '/success',
      this.transactionController.statusTransactionController,
    );
    this.router.patch(
      '/failed',
      this.transactionController.statusFailedTransactionController,
    );
    this.router.post(
      '/point',
      this.transactionController.updatePointTransactionController,
    );
    this.router.get(
      '/filter/date',
      this.transactionController.getTransactionsByDateController,
    );
    // this.router.get('/:id', this.transactionController.getSampleDataById);
    // this.router.post('/', this.transactionController.createSampleData);
  }

  getRouter(): Router {
    return this.router;
  }
}
