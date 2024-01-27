'use client'
import { CustomerGuard } from '@/lib/HOC/costumerGuard'
import { useAppSelector } from '@/lib/hooks'
import { Button, Table } from 'flowbite-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import SidebarPage from '../component/sidebar'

const VouchersPage = () => {

    return (
        <div className='h-screen flex collapse md:visible'>
            <SidebarPage />
            <div className=' w-screen  text-7xl uppercase text-white'>

                <div>
                    <h1 className='text-primary text-7xl uppercase m-5 font-extrabold'>Dashboard Transactions</h1>
                </div>
                <div> <Table>
                    <Table.Head>
                        <Table.HeadCell>Event name</Table.HeadCell>
                        <Table.HeadCell>Date</Table.HeadCell>
                        <Table.HeadCell>Category</Table.HeadCell>
                        <Table.HeadCell>Price</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {'Look at the star"'}
                            </Table.Cell>
                            <Table.Cell>11-02-2024</Table.Cell>
                            <Table.Cell>Musik</Table.Cell>
                            <Table.Cell>$2999</Table.Cell>
                            <Table.Cell className='grid grid-flow-col grid-cols-3 gap-4'>
                                <Button color='success'>
                                    Success
                                </Button><Button color='failure'>
                                    Failured
                                </Button><Button color='warning'>
                                    Edit
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table></div>
            </div>
        </div>
    )
}

export default CustomerGuard(VouchersPage)