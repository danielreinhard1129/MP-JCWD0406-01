import { getAllUserTransactionAction } from '@/actions/transaction/getAllTransaction.action';
import { getTransactionByIdAction } from '@/actions/transaction/getTransaction.action';
import { getTransactionsByDateAction } from '@/actions/transaction/getTransactionbyDate.action';
import { statusFailedTransactionAction } from '@/actions/transaction/statusFailedTransaction.action';
import { statusAccTransactionAction } from '@/actions/transaction/statusTransaction.action';
import prisma from '@/prisma';
import { NextFunction, Request, Response } from 'express';
import scheduler from 'node-schedule';

export class TransactionController {
  async createTransaction(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        userId,
        eventId,
        statusId,
        qty,
        total,
        pointsUsed,
        discountId,
        userRewardId,
        userVoucherId,
      } = req.body;

      const createTransaction = await prisma.transaction.create({
        data: {
          userId,
          eventId,
          qty,
          total,
          pointsUsed,
        },
      });

      await prisma.event.update({
        where: { id: eventId },
        data: { booked: { increment: qty } },
      });

      if (discountId) {
        await prisma.transactionDiscount.create({
          data: { discountId, transactionId: createTransaction.id },
        });
      }

      if (pointsUsed > 0) {
        // kurangin point milik user FEATUREEEEE 2
      }

      if (userRewardId) {
        await prisma.userReward.update({
          where: { id: userRewardId },
          data: { isUsed: true },
        });

        await prisma.transactionUserReward.create({
          data: {
            userRewardId,
            transactionId: createTransaction.id,
          },
        });

        // if(userRewardId){
        //     await prisma.transactionUservoucher.create({

        //     })
        // }
      }

      // scheduler 2 jam
      const twoHours = new Date(Date.now() + 2 * 60 * 60 * 1000);
      scheduler.scheduleJob(twoHours, async () => {
        const result = await prisma.transaction.findUnique({
          where: { id: createTransaction.id },
        });

        if (result?.statusId === 1) {
          await prisma.transaction.update({
            where: { id: result.id },
            data: { statusId: 4 }, // kadaluarsa
          });

          await prisma.event.update({
            where: { id: eventId },
            data: { booked: { decrement: qty } },
          });
        }

        console.log('SCHEDULER 2H EXECUTED');
      });

      // buat lagi scheduler untuk 1 hari sama aja kaya yang scheduler 2 jam cmn kondisinya aja yang di bedain. kalo status id nya masih 2 update table transaction status id menjadi 5 (dibatalkan) lalu update juga table events decrement booked berdasarkan qty. SAMA AJA KAYA ATAS CMN BEDA STATUS ID YANG DIUBAH!!!
    } catch (error) {
      next(error);
    }
  }

  async getAllTransactionController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await getAllUserTransactionAction();
      return res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getTransactionbyIdController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { id } = req.params;
      const result = await getTransactionByIdAction(Number(id));
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async statusTransactionController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await statusAccTransactionAction(req.body);
      return res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }

  async statusFailedTransactionController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await statusFailedTransactionAction(req.body);
      return res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }
  async getTransactionsByDateController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await getTransactionsByDateAction();
      return res.status(result.status).send(result);
    } catch (error) {
      next(error);
    }
  }
}
