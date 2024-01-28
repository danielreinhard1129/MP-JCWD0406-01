import { NextFunction, Request, Response } from 'express';
import prisma from '@/prisma';
import { getUserbyIdAction } from '@/actions/getRolebyUser.action';
import { getEventByUserAction } from '@/actions/events/eventByUser.action';

export class DataController {
  async getUserData(req: Request, res: Response, next: NextFunction) {
    try {
      //   const data = req.body;
      const result = await prisma.pointReferall.aggregate({
        _sum: {
          pointEarned: true,
        },
      });
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      //   const data = req.body;
      const result = await prisma.pointReferall.aggregate({
        _count: {
          pointEarned: true,
        },
      });
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async getEventData(req: Request, res: Response, next: NextFunction) {
    try {
      //   const data = req.body;
      const result = await prisma.event.aggregate({
        _count: {
          _all: true,
        },
      });
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getUserbyId(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await getUserbyIdAction(Number(id));
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
  async getEventbyId(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await getEventByUserAction(Number(id));
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
