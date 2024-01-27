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
  Role: {
    roleName: string;
  };
  referrerUser: [
    {
      id: number;
      pointEarned: number;
    },
  ];
  _count: {
    Event: string;
    referrerUser: string;
  };
}
