import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const BarPage = ({ dataTransactions }: any) => {
    const dataList = [
        {
            name: 'Week',
            Transaction: dataTransactions?.getWeek._sum.total,
        },
        {
            name: 'Month',
            Transaction: dataTransactions?.getMonth._sum.total,
        },
        {
            name: 'Year',
            Transaction: dataTransactions?.getYear._sum.total,
        }
    ];
    return (
        <div className='p-15'>
            <h4 className='text-primary text-center font-extrabold uppercase'>Statistic</h4>

            <ResponsiveContainer className="m-10 ml-24 text-sm" height={450} width={700}>
                <LineChart data={dataList} margin={{ right: 35, top: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Line type="monotone" dataKey="Transaction" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>

    )
}

export default BarPage