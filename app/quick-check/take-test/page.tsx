/* eslint-disable react/no-unescaped-entities */
import Button from "@/app/components/button/button"
import Image from "next/image"

export default function TakeTest() {
    return (
        <div className='w-full'>
            <main className='flex items-center justify-center min-h-screen bg-takeTest'>
                <div className='bg-[#F4F8FC] p-4 w-full min-w-[300px] max-w-[600px] rounded lg:p-12 overflow-hidden'>
                    <div className='flex justify-center visible w-full'>
                        <h1 className='text-xl font-semibold text-center'>
                            Welcome, you are about to start the 15-minute Quick English Check
                        </h1>
                    </div>
                    <div className='flex items-center justify-between mx-4 my-12'>
                        <div className='flex flex-col items-center'>
                            <Image src='/reading.svg' alt='' width={60} height={60} />
                            <div className='mt-2 text-center'>
                                <p className='text-base md:text-xl'>Reading</p>
                                <p className='font-semibold'>7.5 mins</p>
                            </div>
                        </div>
                        <Image src='/plus.svg' alt='plus' width={18} height={18} />
                        <div className='flex flex-col items-center'>
                            <Image src='/listening.svg' alt='listening' width={60} height={60} />
                            <div className='mt-2 text-center'>
                                <p className='text-base md:text-xl'>Listening</p>
                                <p className='font-semibold'>7.5 mins</p>
                            </div>
                        </div>
                        <Image src='/equal.svg' alt='equal' width={18} height={18} />
                        <div className='flex flex-col items-center'>
                            <div className='relative'>
                                <Image src='/clock.svg' alt='' width={60} height={60} className='w-14 h-14 md:w-16 md:h-16' />
                                <p className='absolute text-lg font-semibold -translate-x-1/2 text-takeTestColor top-4 left-1/2'>
                                    15
                                </p>
                            </div>
                            <div className='mt-2 text-center'>
                                <p className='text-base md:text-xl'>Total times</p>
                                <p className='font-semibold'>15 mins</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='mt-6 ml-4'>
                        <ul className='list-disc'>
                            <li className='py-2 md:py-3 md:text-lg'>
                                This test has two sections: reading and listening
                            </li>
                            <li className='py-2 md:py-3 md:text-lg'>
                                You will start with a 7.5-minute reading section.
                            </li>
                            <li className='py-2 md:py-3 md:text-lg'>Pace yourself to avoid running out of time.</li>
                            <li className='py-2 md:py-3 md:text-lg'>You will not lose points for wrong answers.</li>
                            <li className='py-2 md:py-3 md:text-lg'>Once you click "Next" you cannot go back.</li>
                        </ul>
                    </div>
                    <div className='flex justify-end'>
                        <Button
                            toLink='/quick-check/take-test/survey1'
                            classBgTextColor='ct-btnColorEven text-white'
                            label='Start the test'
                        ></Button>
                    </div>
                </div>
            </main>
        </div>
    )
}
