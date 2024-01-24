import React from 'react'
import AllUsers from './components/users'
import SidebarPage from '../component/sidebar'

const ProfilePage = () => {
    return (
        <div className='h-full flex collapse md:visible'>
            <SidebarPage />
            <div className=' w-screen p-5 uppercase text-white'>
                <div>
                    <h1 className='text-primary text-7xl uppercase m-5 font-extrabold'>Dashboard User</h1>
                </div>
                <div><AllUsers /></div>
            </div>
        </div>
    )
}

export default ProfilePage