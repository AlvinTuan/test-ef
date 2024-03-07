import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'
import Link from 'next/link'

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link target='_blank' rel='noopener noreferrer' href='https://www.antgroup.com'>
                EF SET Certificate™
            </Link>
        )
    },
    {
        key: '2',
        label: (
            <Link target='_blank' rel='noopener noreferrer' href='https://www.aliyun.com'>
                Add to profile
            </Link>
        )
    },
    {
        key: '3',
        label: (
            <Link target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
                English levels
            </Link>
        )
    },
    {
        key: '4',
        label: (
            <Link target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
                Certificate search
            </Link>
        )
    }
]

export default function Certification() {
    return (
        <Dropdown menu={{ items }} placement='bottomLeft'>
            <p className='text-base font-semibold cursor-pointer md:text-sm hover:underline'>Certification</p>
        </Dropdown>
    )
}
