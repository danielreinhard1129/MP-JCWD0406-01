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
    this.router.get('/:id', this.eventController.getEventByidController);

    this.router.get('/debounce', this.eventController.getAllEventDebounce);
    this.router.get(
      '/random-events',
      this.eventController.getRandomEventController,
    );
    this.router.get(
      '/new-release-events',
      this.eventController.getNewReleaseEventsController,
    );
    this.router.get('/:id', this.eventController.getEventByIdController);
  }

  getRouter(): Router {
    return this.router;
  }
}
