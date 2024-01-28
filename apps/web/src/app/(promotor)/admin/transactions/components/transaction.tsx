import { baseUrl } from '@/app/utils/database'
import { CustomerGuard } from '@/lib/HOC/costumerGuard'
import { useAppSelector } from '@/lib/hooks'
import { ITransaction } from '@/type/transaction.type'
import axios from 'axios'
import { Button, Table } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

interface IStatus {
    id: number;
    title: string;
    createdAt: Date;
}

interface IData {
    uuid: string;
    eventId: number;
    qty: number;
}


const TransactionsData = () => {
    const userId = useAppSelector((state) => state.user.id)
    console.log(userId);

    const [transactionFailed, setTransactionFailed] = useState(false);
    const [transactionSucces, setTransactionSucces] = useState(false);

    const [allTransactions, setAllTransactions] = useState<ITransaction[]>([]);
    console.log(allTransactions);

    const [transaction, setTransaction] = useState<IData>({
        uuid: '',
        eventId: 0,
        qty: 0,
    });

    console.log('terbaru', transaction);


    const getTransactions = async () => {
        try {
            const response = await axios.get(`${baseUrl}/transaction/${userId}`)
            setAllTransactions(response.data.data)
            console.log('data event', response.data.data)

        } catch (error) {
            console.log(error);
        }
    }

    const statusAccTransaction = async (uuid: string) => {
        try {
            console.log('uuid', uuid);
            const { data } = await axios.patch(baseUrl + '/transaction/success', {
                uuid,
                statusId: 3,
            });
            setTransaction({
                uuid: '',
                eventId: 0,
                qty: 0,
            });
            setTransactionSucces(false)
            toast.success('Payment Success ')

            console.log(data);
            getTransactions();
        } catch (error) {
            console.log(error);
        }
    };

    const statusFailedTransaction = async (
        uuid: string,
        eventId: number,
        qty: number,
    ) => {
        try {
            console.log('uuid', uuid);
            console.log('uuid', eventId);

            const { data } = await axios.patch(baseUrl + '/transaction/failed', {
                uuid,
                statusId: 2,
                eventId,
                qty,
            });
            setTransaction({
                uuid: '',
                eventId,
                qty: 0,
            });
            setTransactionFailed(false)
            toast.error('Payment Rejected ')

            console.log(data);
            getTransactions();
        } catch (error) {
            console.log(error);
        }
    };




    useEffect(() => {
        getTransactions()
    }, [userId])

    const NumberToIDR = ({ amount }: any) => {
        const formatter = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        });

        return <span>{formatter.format(amount)}</span>;
    };

    return (

        <Table>
            <Toaster />

            <Table.Head>

                <Table.HeadCell>Event name</Table.HeadCell>
                <Table.HeadCell>Date</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell>status</Table.HeadCell>
                <Table.HeadCell>
                    <span className="sr-only">Edit</span>
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y" >

                {allTransactions.map((data) => {
                    return (
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {data.event.title}
                            </Table.Cell>
                            <Table.Cell>{data.createdAt.toString().slice(0, 10)}</Table.Cell>
                            <Table.Cell>
                                <NumberToIDR amount={data.total} />
                            </Table.Cell>
                            {/* <Table.Cell>{data.user.username}</Table.Cell> */}
                            <Table.Cell>{data.status.title}</Table.Cell>
                            <Table.Cell className='grid grid-flow-col gap-4'>
                                <Button color='success' onClick={() => {
                                    statusAccTransaction(data.uuid);
                                }}>
                                    Accept
                                </Button>
                                <Button color='failure' onClick={() => {
                                    statusFailedTransaction(
                                        data.uuid,
                                        data.id,
                                        data.qty
                                    )
                                }}>
                                    Decline
                                </Button><Button color='warning'>
                                    Receipt
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                    )
                })}
            </Table.Body>
        </Table >
    )
}

export default CustomerGuard(TransactionsData)