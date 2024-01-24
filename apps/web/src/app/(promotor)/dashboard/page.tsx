'use client'
import React from 'react'
import SidebarPage from './component/sidebar'
import { useAppSelector } from '@/lib/hooks'
import LoginPage from '@/app/(auth)/login/page'
import LandingPage from '@/app/landingpage/page'

const DashboardPage = () => {

    const user = useAppSelector((state) => state.user);
    return (
        <div>
            <div className='h-screen flex collapse md:visible'>
                <SidebarPage />
                <div className=' w-screen  text-7xl uppercase text-white'>
                    <div>
                        <h1 className='text-primary text-7xl uppercase m-5 font-extrabold'>Dashboard Eventerss</h1>
                    </div>
                    <div>Eventerss</div>
                </div>
            </div>

        </div>
    )
}

export default DashboardPage