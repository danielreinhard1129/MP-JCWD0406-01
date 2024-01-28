import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const BarPage = ({ dataTransactions }: any) => {
    const dataList = [
        {
            name: 'Perminggu',
            Transaction: dataTransactions?.getWeek._sum.total,
        },
        {
            name: 'Perbulan',
            Transaction: dataTransactions?.getMonth._sum.total,
        },
        {
            name: 'Pertahun',
            Transaction: dataTransactions?.getYear._sum.total,
        }
    ];
    return (
        <div className='p-5'>
            <h4 className='text-primary text-center font-extrabold uppercase'>Grafik User</h4>
            <ResponsiveContainer height={400}>
                <BarChart width={730} height={250} data={dataList}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Transaction" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>

    )
}

export default BarPage