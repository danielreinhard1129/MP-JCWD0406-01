'use client'
import { CustomerGuard } from '@/lib/HOC/costumerGuard'
import SidebarPage from './component/sidebar'

const DashboardPage = () => {

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

export default CustomerGuard(DashboardPage)