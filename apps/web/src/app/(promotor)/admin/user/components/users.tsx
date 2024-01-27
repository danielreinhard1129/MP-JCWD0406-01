'use client'
import { baseUrl } from '@/app/utils/database';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';
import { useAppSelector } from '@/lib/hooks';
import { useGetUserById } from '@/hooks/api/useGetUserById';

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
const AllUsers = (IUser: any) => {
    const users = useGetUserById();

    return (
        <Table hoverable>
            <TableHead className='bg-primary'>
                <TableHeadCell>Name</TableHeadCell>
                <TableHeadCell>Username</TableHeadCell>
                <TableHeadCell>Status</TableHeadCell>
                <TableHeadCell>Email</TableHeadCell>

            </TableHead>
            <TableBody className="divide-y">
                {users.map((data) => {
                    return (
                        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800" key={data.id}>
                            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {data.first_name} {data.last_name}
                            </TableCell>
                            <TableCell>{data.username}</TableCell>
                            <TableCell>{data.Role.roleName}</TableCell>
                            <TableCell>{data.email}</TableCell>

                        </TableRow>
                    )
                })}

            </TableBody>
        </Table>
    )
}

export default AllUsers