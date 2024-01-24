'use client'
import { baseUrl } from '@/app/utils/database';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';

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

}

const AllUsers = (IUser: any) => {

    const [users, setUsers] = useState<IUser[]>([])
    console.log('data users', users);

    const getAllUser = async () => {
        try {
            const response = await axios.get(`${baseUrl}/users`);
            setUsers(response.data.data)
            console.log(response.data.data)

            return response;
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getAllUser();
    }, []);
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
                            <TableCell>{data.roleId}</TableCell>
                            <TableCell>{data.email}</TableCell>

                        </TableRow>
                    )
                })}

            </TableBody>
        </Table>
    )
}

export default AllUsers