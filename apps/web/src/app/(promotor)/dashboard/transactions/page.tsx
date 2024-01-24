import React from 'react'
import SidebarPage from '../component/sidebar'

const VouchersPage = () => {
    return (
        <div className='h-screen flex collapse md:visible'>
            <SidebarPage />
            <div className=' w-screen  text-7xl uppercase text-white'>

                <div>
                    <h1 className='text-primary text-7xl uppercase m-5 font-extrabold'>Dashboard Admin</h1>
                </div>
                <div>Vouchers</div>
            </div>
        </div>
    )
}

export default VouchersPage