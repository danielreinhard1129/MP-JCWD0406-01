'use client'

import { CustomerGuard } from '@/lib/HOC/costumerGuard';
import { Card } from 'flowbite-react';
import SidebarPage from '../component/sidebar';
import BarPage from './component/event';
import { useGetUserById } from '@/hooks/api/useGetUserById';

const AdminPage = (IUser: any) => {
    const users = useGetUserById();
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
                                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                All User
                                            </h5>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                {data.id}
                                            </p>
                                        </Card>
                                    </div>
                                    <div>
                                        <Card>
                                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                All Events                                </h5>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                {data._count.Event} in registered

                                            </p>
                                        </Card>
                                    </div> <div>
                                        <Card>
                                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                All Transaction                                </h5>
                                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                                {data._count.referrerUser} $

                                            </p>
                                        </Card>
                                    </div>
                                </div>
                            )
                        })}
                        <div className='grid col-span-3'>
                            <BarPage data={users} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerGuard(AdminPage)