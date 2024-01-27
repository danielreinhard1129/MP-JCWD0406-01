import { DataController } from '@/controllers/getAllData.controller';
import { UserController } from '@/controllers/users.controller';
import { verifyToken } from '@/middleware/jwtVerifyToken';
import { Router } from 'express';

export class DataRouter {
  private router: Router;
  private dataController: DataController;

  constructor() {
    this.dataController = new DataController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.dataController.getUserData);
    this.router.get('/events', this.dataController.getEventData);
    this.router.get('/:id', this.dataController.getUserbyId);
  }

  getRouter(): Router {
    return this.router;
  }
}
