export interface IVoucher{
    id: number,
    nameVoucher: string,
    eventId: number,
    // userId             : number,
    discountPercentage : Float32Array,
    startDate          : Date,
    endDate            : Date,
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
    // userId      : number,
    expiredDate : number
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