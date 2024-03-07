import Button from "@/app/components/button/button"
import Image from "next/image"

export default function SectionTest() {
    return (
        <div className='relative flex flex-col items-center w-full'>
            <div className='relative w-full test-section'>
                <Image
                    src='//a.storyblok.com/f/71234/327x202/631a6a1186/section3-top-badge.svg'
                    alt='topBadge'
                    className='absolute top-0 -translate-x-1/2 left-1/2'
                    width={327}
                    height={202}
                />
                <Image
                    src='//a.storyblok.com/f/71234/254x508/156094b038/s3-desktop-left.svg'
                    alt='leftBadge'
                    className='absolute top-1/2 left-0 -translate-y-[45%]'
                    width={254}
                    height={508}
                />
                <Image
                    src='//a.storyblok.com/f/71234/254x508/6219a4e55b/s3-desktop-right.svg'
                    alt='rightBadge'
                    className='absolute top-1/2 right-0 -translate-y-[45%]'
                    width={254}
                    height={508}
                />
                <div className='w-full relative md:mx-auto md:flex md:max-w-[960px] lg:max-w-[1200px]'>
                    <Image
                        src='//a.storyblok.com/f/71234/375x251/38f670e1a3/qec-m-top-badge.svg'
                        alt='mobileTopBadge'
                        className='absolute top-0 w-full -translate-x-1/2 md:hidden left-1/2'
                        width={375}
                        height={251}
                    />
                    <Image
                        src='//a.storyblok.com/f/71234/375x478/83e04b90cd/qec-m-bottom-badge.svg'
                        alt='mobileMidBadge'
                        className='w-full md:hidden absolute top-1/2 left-0 -translate-y-[40%]'
                        width={375}
                        height={478}
                    />
                    <div className='relative flex flex-col w-full px-6 pb-8 pt-14'>
                        <div className='text-white max-w-[515px] self-center text-center pb-10 md:px-0 md:pb-[72px]'>
                            <h1 className='text-3xl font-bold md:text-5xl'>Our short English quiz</h1>
                        </div>
                        <div className='flex flex-col justify-center mx-auto md:flex-row'>
                            <div className='section-three__card md:max-w-[960px] md:flex-row'>
                                <div className='flex items-center pb-6 text-secondary'>
                                    <h6 className='text-[64px] lg:text-[88px] mr-3 leading-tight'>15</h6>
                                    <div>
                                        <p className='text-base font-normal'>
                                            <span>MIN</span>
                                        </p>
                                        <h3 className='text-3xl font-bold'>
                                            <span>
                                                <b>QUICK CHECK</b>
                                            </span>
                                        </h3>
                                    </div>
                                </div>
                                <hr className='ct-line' />
                                <div className='flex md:h-full md:pl-6'>
                                    <div className='hidden md:mr-6 md:flex'>
                                        <hr className='w-px h-full ct-line' />
                                    </div>
                                    <div className='flex flex-col justify-between w-full'>
                                        <p className='text-base font-normal pt-[32px] pb-[18px] lg:max-w-[401px]'>
                                            This English quiz estimates your level in just 15 minutes, including reading
                                            skills (English grammar and vocabulary) and listening skills.
                                        </p>
                                        <ul className='ml-3 text-base list-disc'>
                                            <li className='text-base'>
                                                <p className='text-base font-normal'>
                                                    <span>No fees. No sign ups. Start now </span>
                                                </p>
                                            </li>
                                            <li className='text-base'>
                                                <p className='text-base font-normal'>
                                                    <span>Quiz results aligned to CEFR levels </span>
                                                </p>
                                            </li>
                                            <li className='text-base'>
                                                <p className='text-base font-normal'>
                                                    <span>Share your score on social media </span>
                                                </p>
                                            </li>
                                        </ul>
                                        <Button
                                            toLink='/quick-check/take-test/'
                                            classBgTextColor='ct-btnColorOdd text-white'
                                            label='Start 15 min test'
                                        ></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
