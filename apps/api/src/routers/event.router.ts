import { EventController } from '@/controllers/event.controller';
import { Router } from 'express';

export class EventRouter {
  private router: Router;
  private eventController: EventController;

  constructor() {
    this.eventController = new EventController();
    this.router = Router();
    this.intializeRoutes();
  }

  private intializeRoutes(): void {
    this.router.get('/get-all-events', this.eventController.getAllEvent);
  }

  getRouter(): Router {
    return this.router;
  }
}
