'use client'
import { baseUrl } from '@/app/utils/database';
import { useGetEventByid } from '@/hooks/api/useGetEventById';
import { useAppSelector } from '@/lib/hooks';
import { IEvent } from '@/type/event.type';
import { IUser } from '@/type/user.type';
import axios from 'axios';
import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';
import { useEffect, useState } from 'react';



const TabelEvents = () => {
    const userId = useAppSelector((state) => state.user.id);
    console.log('data', userId);

    const [events, setEvent] = useState<IEvent[]>([]);

    console.log(events);

    const getEvents = async () => {
        try {
            const response = await axios.get(`${baseUrl}/data/events/${userId}`);
            setEvent(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (userId) {
            getEvents();
        }
    }, [userId]);

    return (
        <Table hoverable>
            <TableHead className='bg-primary'>
                <TableHeadCell>Event Name</TableHeadCell>
                <TableHeadCell>Description</TableHeadCell>
                <TableHeadCell>Thumbnail</TableHeadCell>
                <TableHeadCell>
                    <div className='grid  grid-col-2 grid-flow-col items-center'>
                        <div>Location</div>
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
                            <TableCell>{data.thumbnail}</TableCell>
                            <TableCell>{data.location.city}</TableCell>

                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}

export default TabelEvents