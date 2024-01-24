import React from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { dataList } from '../../user/components/list'

const BarPage = () => {
    return (
        <div className='p-5'>
            <h4 className='text-primary text-center font-extrabold uppercase'>Grafik User</h4>
            <ResponsiveContainer height={400}>
                <AreaChart
                    width={500}
                    height={200}
                    data={dataList}
                    syncId="anyId"
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="pv" stroke="#" fill="#E1F0DA" />

                </AreaChart>
            </ResponsiveContainer>
        </div>

    )
}

export default BarPage