import { getAllEventAction } from '@/actions/events/getAllEventsAction';
import { getAllEventsDebounceAction } from '@/actions/events/getAllEventsDebounceAction';
import { getEventByIdAction } from '@/actions/events/getEventByIdAction';
import { getNewReleaseEventsAction } from '@/actions/events/getNewReleaseEventsAction';
import { getRandomEventsAction } from '@/actions/events/getRandomEventsActions';
import prisma from '@/prisma';
import { NextFunction, Request, Response } from 'express';

export class EventController {
  async getAllEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const page = Number((req.query.page as string) || 1);
      const pageSize = Number((req.query.pageSize as string) || 4);
      const eventData = await getAllEventAction(page, pageSize);

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

  async getNewReleaseEventsController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await getNewReleaseEventsAction();

      return res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getAllEventDebounce(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getAllEventsDebounceAction();

      return res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getEventByIdController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = req.params;
      const result = await getEventByIdAction(Number(id));

      res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }
}
