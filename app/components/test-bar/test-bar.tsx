'use client'
import { useState } from 'react'
import OurTests from './Menus/OurTests'
import Certification from './Menus/Certification'
import Cefr from './Menus/Cefr'
import AboutUs from './Menus/AboutUs'
import Link from 'next/link'
import clsx from 'clsx'

export default function TestBar() {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <>
            <header className='relative z-10 w-full shadow-md'>
                <div className='bg-white relative min-h-[56px] md:min-h-[64px] w-full h-full mx-auto flex items-center pl-6 pr-3 flex-row justify-end md:max-w-[960px] md:justify-between lg:py-0 lg:px-[120px] lg:max-w-[1200px]'>
                    <Link href={'/'} className='mr-auto'>
                        <picture>
                            <img src='/efset-logo_black.svg' alt='logo' />
                        </picture>
                    </Link>
                    <ul
                        className={`m-0 p-0 bg-white md:bg-inherit absolute left-0 z-[-1] md:z-auto md:static list-none w-full flex items-center flex-col md:flex-row md:justify-between md:py-4 md:pl-[60px] transition-all duration-500 ease-in ${showMenu ? 'top-14' : 'top-[-225px]'
                            } `}
                    >
                        <div className='menu-item'>
                            <div>
                                <li className='w-full flex relative text-left items-center justify-start no-underline px-4 py-4 md:mr-6 md:pb-3 lg:mr-9 xl:mr-[60px]'>
                                    <OurTests />
                                </li>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <li className='w-full flex relative text-left items-center justify-start no-underline px-4 py-4 md:mr-6 md:pb-3 lg:mr-9 xl:mr-[60px]'>
                                    <Certification />
                                </li>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <li className='w-full flex relative text-left items-center justify-start no-underline px-4 py-4 md:mr-6 md:pb-3 lg:mr-9 xl:mr-[60px]'>
                                    <Cefr />
                                </li>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <li className='w-full flex relative text-left items-center justify-start no-underline px-4 py-4 md:mr-6 md:pb-3 lg:mr-9 xl:mr-[60px]'>
                                    <AboutUs />
                                </li>
                            </div>
                        </div>
                    </ul>
                    <button
                        className='flex items-center justify-center w-10 h-10 btn-bar md:hidden'
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        {showMenu ? (
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                className='ct-icon'
                            >
                                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        ) : (
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth='1.5'
                                stroke='currentColor'
                                className='ct-icon'
                            >
                                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 9h16.5m-16.5 6.75h16.5' />
                            </svg>
                        )}
                    </button>
                    <div
                        className={clsx(
                            'fixed inset-0 bg-black bg-opacity-10 transition-all ease-out duration-300 z-[-2]',
                            {
                                'bg-opacity-10 block': showMenu,
                                'bg-opacity-0 hidden': !showMenu
                            }
                        )}
                        onClick={() => setShowMenu(false)}
                    ></div>
                </div>
            </header>
        </>
    )
}
