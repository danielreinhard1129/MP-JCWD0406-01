'use client'
import { baseUrl } from '@/app/utils/database';
import axios from 'axios';
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
interface IUser {
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
    Role: {
        roleName: string;
    },
    referrerUser: {
        pointEarned: number;
    }
}

interface IEvent {
    id: number;
    title: string;
    description: string;
    locationId: number;
    startDate: Date;
    endDate: Date;
    price: number;
    limit: number;
    booked: number;
    thumbnail: string;
    userId: number;
    createdAt: Date;
    updateAt: Date;
}
const DiscountPrice = (IUser: any, IEvent: any) => {
    const param = useParams();
    console.log(param.transaksi);


    // const [discount, setDiscount] = useState<IEvent[]>([]);
    // console.log('price', discount);

    // const getDiscount = async () => {
    //     try {
    //         const response = await axios.get(`${baseUrl}/events/${param.transaksi}`);
    //         setDiscount(response.data.data)
    //         console.log("Discount", response.data.data);
    //     } catch (error) {
    //         console.log(error);

    //     }

    // }


    // useEffect(() => {
    //     getDiscount();
    // }, [])


    // const [points, setPoints] = useState(0);
    // const [price, setPrice] = useState(1);

    // const handleIncrement = () => {
    //     setPoints(points + discount.price);
    //     setPrice(price * 2);
    // }
    // const calculateTotal = () => {
    //     return event.tickets.reduce(
    //         (total, ticket, index) => total + ticketQuantities[index] * ticket.price,
    //         event.adminFee,
    //     );
    // };
    return (
        <Accordion>
            <AccordionPanel className="bg-fix">
                <AccordionTitle className="bg-fix">Discount</AccordionTitle>
                <AccordionContent>
                    {/* {discount.map((data) => {
                        return (
                            <div key={data.id}>{data.price}
                            </div>
                        )
                    })} */}
                    {/* {discount.map((data) => {
                    return ( */}
                    <div >
                        <div className="flex flex-wrap justify-between">
                            <div className="flex flex-col">
                                <text className="text-[15px]">Discount IDR 10.000</text>
                                <text className="text-[15px]">From </text>
                                <text className="text-[15px]">Expired at 30 Feb 2023</text>
                            </div>
                            <div className="self-center">
                                <button className="bg-fourth rounded-xl py-2 px-1" >
                                    Use Discount
                                </button>
                                {/* <p>Points: {points}</p>
                                <p>Price per point: ${price}</p> */}
                            </div>
                        </div>
                        <hr className="mt-3" />
                    </div>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    )
}

export default DiscountPrice