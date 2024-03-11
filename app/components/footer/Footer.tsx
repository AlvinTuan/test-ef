'use client'
import React from 'react'
import { Typography, Divider } from 'antd'
import Link from 'next/link'
import { informationFooter } from "@/app/lib/placeholder-data"



const { Title } = Typography

function Footer() {
    return (
        <div className='footer bg-black'>
            <div className="w-full max-w-full pt-16 px-6 md:max-w-[960px] lg:max-w-[1200px] lg:px-[120px] m-auto">
                <div className="flex flex-col md:flex-row md:justify-center">
                    {
                        informationFooter.map((item) => (
                            <div key={item._id} className="z-1 max-w-[90%] pt-3 pb-6 px-0 md:w-[260px] md:mr-6 lg:pb-12">
                                <Title className='!text-white select-none' level={5}>
                                    {item.nameCol}
                                </Title>
                                <hr />
                                <div className='flex flex-col gap-2 md:gap-4 mt-4'>
                                    {item.linkGroup.map(link =>
                                        <Link key={link.linkHref} className='' href={link.linkHref}>
                                            <p className='!text-white text-base cursor-pointer md:text-sm md:hover:underline'>
                                                {link.linkLabel}
                                            </p>
                                        </Link>)}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="logo-footer"></div>
                <div className="bottom-footer"></div>
            </div>
        </div >
    )
}

export default Footer