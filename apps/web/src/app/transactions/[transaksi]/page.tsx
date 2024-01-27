import React from 'react';
import PriceListComp from './components/PriceList';
import TotalPrice from './components/TotalPrice';
import VoucherComp from './components/Voucher';
import Link from 'next/link';

const TransactionPage = () => {

  return (
    <section className=" bg-[#ECDFCB] pb-3">
      <div className="bg-[#ECDFCB]">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-center md:text-[40px] text-[25px] font-bold border border-fourth shadow-2xl md:mx-[200px] pt-5 rounded-3xl">
            Checkout Payment
          </h1>
          <div className="md:flex grid grid-cols-1 md:gap-8 gap-3 mt-5 md:pl-3 px-2">
            <PriceListComp />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransactionPage;
