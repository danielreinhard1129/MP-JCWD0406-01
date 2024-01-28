'use client'

import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
  Kbd,
} from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { FaCoins } from 'react-icons/fa6';
import DiscountPrice from './discount';
import Link from 'next/link';
import axios, { AxiosError } from 'axios';
import { baseUrl } from '@/app/utils/database';
import { useParams, useRouter } from 'next/navigation';
import { useAppSelector } from '@/lib/hooks';
import { IUser } from '@/type/user.type';
import { IEvent } from '@/type/event.type';
import toast, { Toaster } from 'react-hot-toast';
import { Router } from 'next/router';


const event = {
  title: 'Drive-in Senja: Back to the Future',
  location: 'Parkir Timur Senayan',
  date: '9 September 2024',
  time: '20:00 - 23:00',
  tickets: [{ type: 'VIP', quantity: 2, price: 50000 }],
  adminFee: 26000,
};


const PriceListComp = (IEvent: any, IUser: any) => {
  const router = useRouter();
  const userId = useAppSelector((state) => state.user.id);
  const param = useParams();
  console.log(param);
  console.log(userId);
  const [points, setPoints] = useState<IUser[]>([]);
  console.log(points);

  const [priceEvent, setPriceEvent] = useState<IEvent[]>([]);
  console.log(priceEvent);
  const [point, setPoint] = useState(0);
  const [pointUsed, setPointUsed] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [getsPoints, setGetsPoints] = useState(0);
  console.log(getsPoints);


  const [isUse, SetIsUse] = useState(false)
  const handleIncrement = () => {
    SetIsUse(!isUse)
    if (isUse) {
      setPointUsed(0)
    } else {
      setPointUsed(point)
      setTotalPayment(Number(priceEvent) - pointUsed)
    }
  }

  console.log('data point', pointUsed);
  console.log('data price', priceEvent);

  const total = priceEvent;



  const getPoint = async () => {
    try {
      const response = await axios.get(`${baseUrl}/data/${userId}`);
      setPoints(response.data.data)
      setPriceEvent(response.data.data[0].Event[0].price)
      // setGetsPoints(response.data.)
      // setPoint(response.data._sum.pointEarned)
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }

  }

  const getPoints2 = async () => {
    try {
      const response = await axios.get(`${baseUrl}/data/`);
      setGetsPoints(response.data._sum.pointEarned)
      setPoint(response.data._sum.pointEarned)
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    if (userId) {
      getPoint()
    }
    getPoints2()
  }, [userId])


  const NumberToIDR = ({ amount }: any) => {
    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });

    return <span>{formatter.format(amount)}</span>;
  };

  // const [pointUpdate, setPointUpdate] = useState(false);
  // console.log('point update', pointUpdate);

  const handleSubmit = async () => {
    try {
      await axios.post(`${baseUrl}/transaction/point`, {
        pointUpdateId: points[0].id,
      });
      toast.success(`transaction success`);
      router.push('/');
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMsg = error.response?.data || error.message;
        toast.error(errorMsg);
      }
    }
  };

  return (

    <>
      <Toaster />
      <div className="md:w-[950px] shadow-inner rounded-xl bg-[#E0DFDB]">
        <div className="flex flex-col p-4">
          <h1 className="text-[30px] font-semibold">Billed To</h1>
          {points.map((data) => {
            return (
              <div key={data.id}>
                <hr className=" mt-2 mb-4 border border-dashed border-black" />
                <text className="font-extrabold text-[20px]">{data.first_name}</text>
                <text>{data.email}</text>
                <text>{data.contact}</text>
                <h1 className="text-[30px] font-semibold">Pricing List</h1>
              </div>
            )
          })}
          <hr className=" mt-2 mb-2 border border-dashed border-black" />
          <div className="flex justify-between">
            <div>
              <text className="text-[20px] font-medium">Ticket</text>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="w-fit px-3 rounded-md bg-fix">-</button>
              <Kbd>0</Kbd>
              <button className="w-fit px-3 rounded-md bg-fix">+</button>
            </div>
          </div>
          <div className="flex flex-col">
            <text>IDR 120.000</text>
            <span className="text-[15px] text-[#B45948]">available seats 50</span>
          </div>
          <div className="mt-2">
            <Accordion className="bg-fix">
              <AccordionPanel className="bg-fix">
                <AccordionTitle className="bg-fix">Voucher</AccordionTitle>
                <AccordionContent>
                  <div className="flex flex-wrap justify-between">
                    <div className="flex flex-col">
                      <text className="text-[15px]">Voucher IDR 10.000</text>
                      <text className="text-[15px]">From Aldi Taher</text>
                      <text className="text-[15px]">Expired at 30 Feb 2023</text>
                    </div>
                    <div className="self-center">
                      <button className="bg-fourth rounded-xl py-2 px-1">
                        Use Voucher
                      </button>
                    </div>
                  </div>
                  <hr className="mt-3" />
                  <div className="mt-3 flex flex-wrap justify-between">
                    <div className="flex flex-col">
                      <text className="text-[15px]">Voucher IDR 10.000</text>
                      <text className="text-[15px]">From Aldi Taher</text>
                      <text className="text-[15px]">Expired at 30 Feb 2023</text>
                    </div>
                    <div className="self-center">
                      <button className="bg-fourth rounded-xl py-2 px-1">
                        Use Voucher
                      </button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionPanel>
              <DiscountPrice />
            </Accordion>
            <div className="mt-3 flex justify-between">
              <div className="flex flex-wrap gap-2 items-center">
                <FaCoins size={30} />
                {/* {points[0].referrerUser.map((data) => {
                  return (
                    <div key={data.id}> {data.pointEarned}</div>
                  )
                })} */}
              </div>

              <div>
                <p>Amount in IDR: <NumberToIDR amount={getsPoints} /></p>
              </div>
              <div>
                <button className="bg-fix py-1 px-3 rounded-lg" onClick={handleIncrement}>use coin</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="rounded-2xl">
          <div className="bg-fix rounded-2xl shadow-xl">
            <div className="md:w-[270px]  p-4">
              <h1 className=" text-[20px] font-medium flex justify-center">
                Total Price
              </h1>
              <hr className="mt-2 border-1 border-black" />
              <div className="mt-2">
                <div >
                  <div className="flex justify-between">
                    <text className="font-medium">Ticket</text>

                    <text>
                      <NumberToIDR amount={priceEvent} />
                    </text>
                  </div>
                  <div className="flex justify-between">
                    <text className="font-medium">Voucher</text>
                    <text className="font-semibold">IDR -20.000</text>
                  </div></div>

                <div className="flex justify-between">
                  <text className="font-medium">Point</text>
                  <text className="font-semibold" >-
                    <NumberToIDR amount={pointUsed} />

                  </text>
                </div>
              </div>
              <hr className="mt-3 border-1 border-black" />
              <div className="mt-2 flex justify-between">
                <text className="font-medium">Total</text>
                <text className="font-semibold"><NumberToIDR amount={Number(priceEvent) - pointUsed} /></text>
              </div>
            </div>
            {/* <Link href="/waitingpayment"> */}
            <button className="w-full bg-fourth shadow-2xl h-[50px] rounded-br-2xl rounded-bl-2xl" onClick={handleSubmit}>
              Checkout
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div></>
  );
};

export default PriceListComp;
