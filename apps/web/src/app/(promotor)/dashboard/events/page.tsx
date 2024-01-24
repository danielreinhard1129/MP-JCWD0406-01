import React from 'react'
import SidebarPage from '../component/sidebar'
import TabelEvents from './components/tabelEvents'

const EventsPage = () => {
    return (
        <div className='h-screen flex collapse md:visible'>
            <SidebarPage />
            <div className=' w-screen text-7xl uppercase text-white'>
                <div>
                    <h1 className='text-primary text-7xl uppercase m-5 font-extrabold'>All Events</h1>
                </div>
                <TabelEvents />
            </div>
        </div>
    )
}

export default EventsPage