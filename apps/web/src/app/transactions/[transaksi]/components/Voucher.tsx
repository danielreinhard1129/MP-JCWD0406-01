'use client';

import { baseUrl } from '@/app/utils/database';
import axios from 'axios';
import { Modal, ModalBody, ModalHeader } from 'flowbite-react';
import { useEffect, useState } from 'react';


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


const VoucherComp = (IUser: any) => {
  const [openModal, setOpenModal] = useState(false);

  const [discount, setDiscount] = useState([]);
  console.log(discount);

  const getDiscount = async () => {
    try {
      const response = await axios.get(`${baseUrl}/users/`);
      setDiscount(response.data.data)
      console.log("Discount", response.data.data);
    } catch (error) {
      console.log(error);

    }

  }


  useEffect(() => {
    getDiscount();
  }, [])
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
            {/* {discount.map((data) => {
              return (
                <div key={data.id}>
                  <div>
                    <h2>Discount { } IDR 1.000</h2>
                    <text>From {data.username}</text>
                    <br />
                    <text>Expired at 3 Feb 2023</text>
                  </div>
                  <button className="bg-fourth rounded-xl p-2">Use Voucher</button>
                </div>)
            })} */}
          </div>

          <hr className="mt-3" />

        </ModalBody>
      </Modal>
    </div>
  );
};

export default VoucherComp;
