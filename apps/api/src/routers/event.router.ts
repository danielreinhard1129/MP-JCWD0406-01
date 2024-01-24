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
    this.router.get('/all-events', this.eventController.getAllEvent);
    this.router.get(
      '/random-events',
      this.eventController.getRandomEventController,
    );
    this.router.get(
      '/new-release-events',
      this.eventController.getNewReleaseEventsController,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
