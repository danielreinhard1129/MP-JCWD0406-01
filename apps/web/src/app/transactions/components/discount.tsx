'use client';
import { baseUrl } from '@/app/utils/database';
import axios from 'axios';
import {
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from 'flowbite-react';
import React, { useEffect, useState } from 'react';

const DiscountPrice = () => {
  const [discount, setDiscount] = useState([]);
  console.log(discount);

  const getDiscount = async () => {
    try {
      const response = await axios.get(`${baseUrl}/users/`);
      setDiscount(response.data.data);
      console.log('Discount', response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDiscount();
  }, []);
  return (
    <div>
      <AccordionPanel className="bg-fix">
        <AccordionTitle className="bg-fix">Discount</AccordionTitle>
        <AccordionContent>
          <div>halo</div>

          <div>
            <div className="flex flex-wrap justify-between">
              <div className="flex flex-col">
                <text className="text-[15px]">Discount IDR 10.000</text>
                <text className="text-[15px]">From</text>
                <text className="text-[15px]">Expired at 30 Feb 2023</text>
              </div>
              <div className="self-center">
                <button className="bg-fourth rounded-xl py-2 px-1">
                  Use Discount
                </button>
              </div>
            </div>
            <hr className="mt-3" />
          </div>
        </AccordionContent>
      </AccordionPanel>
    </div>
  );
};

export default DiscountPrice;
