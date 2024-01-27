'use client'

import { Sidebar } from 'flowbite-react'
import { listDasboardBar } from './list'

const SidebarPage = ({ users }: any) => {

    return (
        <Sidebar aria-label=" Sidebar with multi-level dropdown example">
            <Sidebar.Items >
                <Sidebar.ItemGroup>
                    {listDasboardBar.map((datalist) => {
                        return (
                            <Sidebar.Item href={datalist.link} icon={datalist.icon}>
                                {datalist.title}
                            </Sidebar.Item>
                        )
                    })}
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}

export default SidebarPage