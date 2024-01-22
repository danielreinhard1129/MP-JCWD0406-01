import prisma from '@/prisma';
import { NextFunction, Request, Response } from 'express';

export class EventController {
  async getAllEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const eventData = await prisma.event.findMany();

      return res.status(200).send(eventData);
    } catch (error) {
      next(error);
    }
  }
}
