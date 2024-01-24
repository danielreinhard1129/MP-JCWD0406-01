import { getAllEventAction } from '@/actions/events/getAllEventsAction';
import { getRandomEventsAction } from '@/actions/events/getRandomEventsActions';
import prisma from '@/prisma';
import { NextFunction, Request, Response } from 'express';

export class EventController {
  async getAllEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const eventData = await getAllEventAction();

      return res.status(200).send(eventData);
    } catch (error) {
      next(error);
    }
  }

  async getRandomEventController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const randomEvents = await getRandomEventsAction();

      return res.status(randomEvents.status).send(randomEvents);
    } catch (error) {
      next(error);
    }
  }
}
