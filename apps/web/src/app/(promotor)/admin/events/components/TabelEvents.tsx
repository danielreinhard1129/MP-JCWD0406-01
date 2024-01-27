'use client'
import { useGetEventByid } from '@/hooks/api/useGetEventById';
import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';



const TabelEvents = (IEvent: any, IUser: any) => {
    const events = useGetEventByid();
    return (
        <Table hoverable>
            <TableHead className='bg-primary'>
                <TableHeadCell>Product name</TableHeadCell>
                <TableHeadCell>Color</TableHeadCell>
                <TableHeadCell>username</TableHeadCell>
                <TableHeadCell>
                    <div className='grid  grid-col-2 grid-flow-col items-center'>
                        <div>Email</div>
                        <Button color="warning">Create Event</Button>
                    </div>
                </TableHeadCell>


            </TableHead>
            <TableBody className="divide-y">
                {events.map((data) => {
                    return (
                        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800" key={data.id}>
                            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {data.title}
                            </TableCell>
                            <TableCell>{data.description}</TableCell>
                            <TableCell>{data.user.first_name}</TableCell>
                            <TableCell>{data.user.email}</TableCell>

                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}

export default TabelEvents