import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi'

export const listDasboardBar = [{
    title: 'Dashboard',
    icon: HiChartPie,
    link: '/dashboard/admin'
}, {
    title: 'Events',
    icon: HiTable,
    link: '/dashboard/events'
},
{
    title: 'Attendee',
    icon: HiShoppingBag,
    link: '/dashboard/attende'
}, {
    title: 'Transactions',
    icon: HiInbox,
    link: '/dashboard/transactions'
},
{
    title: ' Statistics',
    icon: HiUser,
    link: '/dashboard/user'
}]