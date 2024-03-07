import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'
import Link from 'next/link'

const items: MenuProps['items'] = [
    {
        key: '1',
        label: <Link href={'/about'}>About the test</Link>
    },
    {
        key: '2',
        label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.aliyun.com'>
                Our research
            </a>
        )
    },
    {
        key: '3',
        label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
                FAQ
            </a>
        )
    }
]

export default function AboutUs() {
    return (
        <Dropdown menu={{ items }} placement='bottomLeft'>
            <p className='text-base md:text-sm hover:underline cursor-pointer font-semibold'>About Us</p>
        </Dropdown>
    )
}
