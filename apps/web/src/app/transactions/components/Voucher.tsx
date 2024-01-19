'use client';

import { Modal, ModalBody, ModalHeader } from 'flowbite-react';
import { useState } from 'react';

const VoucherComp = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="">
      <button
        onClick={() => setOpenModal(true)}
        className="w-full h-[50px] bg-fix rounded-2xl"
      >
        Voucher
      </button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>
          <h1 className="font-medium text-[25px]">Your Available Voucher</h1>
        </ModalHeader>
        <ModalBody>
          <div className="flex flex-wrap justify-between">
            <div>
              <h2>Discount IDR 10.000</h2>
              <text>From Aldi Taher</text>
              <br />
              <text>Expired at 30 Feb 2023</text>
            </div>
            <button className="bg-fourth rounded-xl p-2">Use Voucher</button>
          </div>
          <hr className="mt-3" />
          <div className="mt-3 flex flex-wrap justify-between">
            <div>
              <h2>Discount IDR 10.000</h2>
              <text>From Aldi Taher</text>
              <br />
              <text>Expired at 30 Feb 2023</text>
            </div>
            <button className="bg-fourth rounded-xl p-2">Use Voucher</button>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default VoucherComp;
