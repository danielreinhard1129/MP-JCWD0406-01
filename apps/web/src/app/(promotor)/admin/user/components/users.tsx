'use client'
import { baseUrl } from '@/app/utils/database';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';
import { useAppSelector } from '@/lib/hooks';
import { useGetUserById } from '@/hooks/api/useGetUserById';
import { IEvent } from '@/type/event.type';

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
    };
    Event: {
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
}
const AllUsers = () => {
    const userId = useAppSelector((state) => state.user.id);
    console.log('data', userId);

    const [events, setEvent] = useState<IEvent[]>([]);

    console.log(events);

    const getEvents = async () => {
        try {
            const response = await axios.get(`${baseUrl}/data/events/${userId}`);
            setEvent(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (userId) {
            getEvents();
        }
    }, [userId]);

    return (
        <Table hoverable>
            <TableHead className='bg-primary'>
                <TableHeadCell>Name</TableHeadCell>
                <TableHeadCell>Username</TableHeadCell>
                <TableHeadCell>Referall</TableHeadCell>
                <TableHeadCell>Email</TableHeadCell>

            </TableHead>
            <TableBody className="divide-y">
                {events.map((data) => {
                    return (
                        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800" key={data.id}>
                            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {data.user.first_name} {data.user.last_name}
                            </TableCell>
                            <TableCell>{data.user.username}</TableCell>
                            <TableCell>{data.user.codeReferall}</TableCell>
                            <TableCell>{data.user.email}</TableCell>

                        </TableRow>
                    )
                })}

            </TableBody>
        </Table>
    )
}

export default AllUsers