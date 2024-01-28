'use client'

import { CustomerGuard } from '@/lib/HOC/costumerGuard';
import axios from 'axios';
import { Card } from 'flowbite-react';
import { useEffect, useState } from 'react';
import SidebarPage from '../component/sidebar';

import { baseUrl } from '@/app/utils/database';
import { useAppSelector } from '@/lib/hooks';
import { IUser } from '@/type/user.type';
import BarPage from './component/event';
interface Total {
    total: number;
}

interface Sum {
    _sum: Total;
}

interface IData {
    getWeek: Sum;
    getMonth: Sum;
    getYear: Sum;
}

const AdminPage = (IUser: any, IData: any) => {
    const userId = useAppSelector((state) => state.user);

    const [users, setUsers] = useState<IUser[]>([]);
    console.log(users);

    const [dataTransactions, setDataTransactions] = useState<IData>();
    console.log(dataTransactions);

    const getUsers = async () => {
        try {
            const response = await axios.get(`${baseUrl}/data/${userId.id}`);
            setUsers(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };
    const getDatas = async () => {
        try {
            const { data } = await axios.get(`${baseUrl}/transaction/filter/date`);
            setDataTransactions(data.data);
        } catch (error) {
            console.log(error);
        }
    };



    useEffect(() => {
        if (userId) {
            getUsers()
        }
        getDatas()
    }, [userId]);


    const NumberToIDR = ({ amount }: any) => {
        const formatter = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        });

        return <span>{formatter.format(amount)}</span>;
    };


    return (
        <div className='h-full grid grid-cols-5 collapse md:visible'>
            <SidebarPage data={users} />
            <div className='col-span-4'>
                <div>
                    <div>
                        <h1 className='text-primary text-7xl uppercase m-5 font-extrabold'>Dashboard Admin</h1>
                    </div>
                    <div className='grid grid-cols-4'>
                        {users.map((data) => {
                            return (
                                <div className='grid grid-cols-1 gap-4 p-5'>
                                    <div>
                                        <Card>
                                            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                Transaction in Week
                                            </h5>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                <NumberToIDR amount={dataTransactions?.getWeek._sum.total} />
                                            </p>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card>
                                            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                All Events                                </h5>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                {data._count.Event} Event

                                            </p>
                                        </Card>
                                    </div> <div>
                                        <Card>
                                            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                All Transaction - Totall All Transaction</h5>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                {data._count.Transaction} ||  <NumberToIDR amount={dataTransactions?.getYear._sum.total + dataTransactions?.getMonth._sum.total + dataTransactions?.getWeek._sum.total} />
                                            </p>
                                        </Card>
                                    </div>
                                </div>
                            )
                        })}
                        <div className='grid col-span-3'>

                            <BarPage dataTransactions={dataTransactions} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerGuard(AdminPage)