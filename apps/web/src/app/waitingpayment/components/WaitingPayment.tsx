import { FileInput, Label } from 'flowbite-react';
import React from 'react';

const WaitingPaymentComp = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col bg-[#FFC68C] shadow-2xl p-2 rounded-bl-2xl rounded-br-2xl">
          <h1 className="text-[30px] font-semibold">Billed To</h1>
          <hr className=" mt-2 mb-4 border border-dashed border-black" />
          <text className="font-extrabold text-[20px]">John Doe</text>
          <text>JohnDoe@gmail.com</text>
          <text>081233367821</text>
        </div>
        <div className="mt-1 p-2 bg-[#FFC68C] rounded-2xl">
          <div className="p-2">
            <h1 className=" text-[20px] font-medium flex justify-center">
              Total Price
            </h1>
            <hr className="mt-2 border-1 border-black" />
            <div className="mt-2">
              <div className="flex justify-between">
                <text className="font-medium">Ticket</text>
                <text className="font-semibold">IDR 240.000</text>
              </div>
              <div className="flex justify-between">
                <text className="font-medium">Voucher</text>
                <text className="font-semibold">IDR -20.000</text>
              </div>
              <div className="flex justify-between">
                <text className="font-medium">Coin</text>
                <text className="font-semibold">-15.000</text>
              </div>
            </div>
            <hr className="mt-3 border-1 border-black" />
            <div className="mt-2 flex justify-between">
              <text className="font-medium">Total</text>
              <text className="font-semibold">IDR 205.000</text>
            </div>
          </div>
        </div>
        <div className="mt-2 bg-[#FFC68C] rounded-2xl">
          <h1 className=" text-[20px] font-medium flex justify-center">
            Bukti Pembayaran
          </h1>
          <div>
            <div className="mb-2 block"></div>
            <FileInput id="file-upload" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingPaymentComp;
