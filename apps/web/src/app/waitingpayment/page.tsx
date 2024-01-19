import React from 'react';
import WaitingPaymentComp from './components/WaitingPayment';

const WaitingPaymentPage = () => {
  return (
    <section className="h-screen bg-[#ECDFCB]">
      <div className="">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-center md:text-[40px] text-[25px] font-thin border border-fourth shadow-2xl pt-5 rounded-3xl">
            Waiting For Payment
          </h1>
          <span className="flex justify-center font-medium text-[35px] shadow-inner mx-[100px]">
            02:00:00
          </span>
          <div className="mt-5 px-2">
            <WaitingPaymentComp />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitingPaymentPage;
