'use client'
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import SidebarPage from '../component/sidebar';
import { dataList } from '../profile/components/list';
import { Card } from 'flowbite-react';
import BarPage from './component/event';
import BarUser from './component/user';

const AdminPage = () => {

    return (
        <div className='h-full grid grid-cols-5 collapse md:visible'>
            <SidebarPage />
            <div className='col-span-4'>
                <div>
                    <div>
                        <h1 className='text-primary text-7xl uppercase m-5 font-extrabold'>Dashboard Admin</h1>
                    </div>
                    <div className='grid grid-cols-3 gap-4 p-5'>
                        <div>
                            <Card>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    All User
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                </p>
                            </Card>
                        </div>
                        <div>
                            <Card>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    All Events                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                </p>
                            </Card>
                        </div> <div>
                            <Card>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    All Transaction                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                </p>
                            </Card>
                        </div>
                    </div>
                    <div className='grid grid-flow-col'>
                        <BarPage />
                        <BarUser />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPage