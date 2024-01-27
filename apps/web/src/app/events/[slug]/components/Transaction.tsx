import Link from 'next/link';
import React from 'react';

const TransactionComp = ({ event }: any) => {
  return (
    <>
      <div className="w-[270px] bg-fix rounded-2xl shadow-xl">
        <div className="p-4">
          <h1 className=" text-[20px] font-medium flex justify-center">
            Ticket
          </h1>
          <hr className="mt-2 border-1 border-black" />
          <div className="mt-3">
            <h2 className="text-[20px] font-medium">Type Ticket</h2>
            <div className="flex flex-wrap justify-between">
              <div className="">
                <p className="text-[15px] font-medium">price</p>
                <text className=" font-semibold">{event.price}</text>
              </div>
            </div>
            <span className=" text-third">available seat: 50</span>
          </div>
        </div>
        <Link href="/transactions">
          <button className="w-full bg-fourth shadow-2xl h-[50px] rounded-br-2xl rounded-bl-2xl">
            Checkout
          </button>
        </Link>
      </div>
    </>
  );
};

export default TransactionComp;
