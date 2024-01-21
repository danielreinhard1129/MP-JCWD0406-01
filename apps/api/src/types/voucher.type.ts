export interface IVoucher{
    id: number,
    nameVoucher: string,
    eventId: number,
    userId             : number,
    discountPercentage :number,
    createAt          : Date,
    updateAt            : Date,
} 

export interface ILogin {
    usernameOrEmail: string,
    password: string
}

export interface IClaimVoucher {
    id             : number,
    transactionDate: Date,
    myVoucherId     : number,
}


export interface IMyVoucher {
    id          : number,
    voucherId   : number,
    userId      : number,
    expiredDate : Date
}
export interface IUserReff{
     id        : number,
    referallid: number,
  createdAt : Date,
}

export interface IPrize {
    id: number,
    name: string,
    point: number,
}