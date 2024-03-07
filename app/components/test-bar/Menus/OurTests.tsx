import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'
import './menu-item.scss'
import Link from 'next/link'

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link href={'/quick-check'}>Quick check (15-min)</Link>
        )
    },
    {
        key: '2',
        label: (
            <Link target='_blank' rel='noopener noreferrer' href='https://www.aliyun.com'>
                EF Set 50(50-min)
            </Link>
        )
    },
    {
        key: '3',
        label: (
            <Link target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
                Assessment Solutions
            </Link>
        )
    }
]

export default function OurTests() {
    return (
        <Dropdown menu={{ items }} placement='bottomLeft'>
            <p className='text-base font-semibold cursor-pointer md:text-sm hover:underline'>Our Tests</p>
        </Dropdown>
    )
}
