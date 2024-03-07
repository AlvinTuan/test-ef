import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'
import Link from 'next/link'

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link target='_blank' rel='noopener noreferrer' href='https://www.antgroup.com'>
                About the CEFR
            </Link>
        )
    },
    {
        key: '2',
        label: (
            <Link target='_blank' rel='noopener noreferrer' href='https://www.aliyun.com'>
                A1
            </Link>
        )
    },
    {
        key: '3',
        label: (
            <Link target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
                A2
            </Link>
        )
    },
    {
        key: '4',
        label: (
            <Link target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
                B1
            </Link>
        )
    },
    {
        key: '5',
        label: (
            <Link target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
                B2
            </Link>
        )
    },
    {
        key: '6',
        label: (
            <Link target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
                C1
            </Link>
        )
    },
    {
        key: '7',
        label: (
            <Link target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
                C2
            </Link>
        )
    }
]

export default function Cefr() {
    return (
        <Dropdown menu={{ items }} placement='bottomLeft'>
            <p className='text-base md:text-sm hover:underline cursor-pointer font-semibold'>CEFR</p>
        </Dropdown>
    )
}
