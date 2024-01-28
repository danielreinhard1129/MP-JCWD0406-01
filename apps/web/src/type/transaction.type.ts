export interface ITransaction {
  id: number;
  uuid: string;
  userId: number;
  eventId: number;
  statusId: number;
  qty: number;
  paymentImg: string;
  total: number;
  pointsUsed: number;
  createdAt: Date;
  updaetdAt: Date;
  status: {
    title: string;
  };
  event: {
    title: string;
  };
  user: {
    username: string;
  };
}
