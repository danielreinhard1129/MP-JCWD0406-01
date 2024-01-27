export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  email: string;
  contact: string;
  codeReferall: string;
  address: string;
  updatedAt: Date;
  createdAt: Date;
  roleId: number;
}

export interface IEvent {
  id: number;
  title: string;
  description: string;
  locationId: number;
  startDate: Date;
  endDate: Date;
  price: number;
  limit: number;
  booked: number;
  thumbnail: string;
  userId: number;
  createdAt: Date;
  updateAt: Date;
}
