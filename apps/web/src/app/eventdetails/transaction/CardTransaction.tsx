import { Dropdown, Kbd } from 'flowbite-react';
import VoucherComp from './Voucher';

const CardTransactionComp = () => {
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
              <div>
                <p className="text-[10px]">price</p>
                <text className=" font-semibold">IDR 120.000</text>
              </div>
              <div className="flex flex-wrap h-fit mt-2">
                <Kbd>-</Kbd>
                <Kbd>1</Kbd>
                <Kbd>+</Kbd>
              </div>
            </div>
            <hr className="mt-2 border-1 border-black" />
            <h2 className="mt-3 text-[20px] font-medium">Type Ticket</h2>
            <div className="flex flex-wrap justify-between">
              <div>
                <p className="text-[10px]">price</p>
                <text className=" font-semibold">IDR 120.000</text>
              </div>
              <div className="flex flex-wrap h-fit mt-2">
                <Kbd>-</Kbd>
                <Kbd>1</Kbd>
                <Kbd>+</Kbd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTransactionComp;
