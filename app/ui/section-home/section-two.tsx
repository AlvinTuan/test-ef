/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"

export default function SectionTwo() {
    return (
        <div className='section-two'>
            <div className='w-full relative lg:max-w-[1200px] md:max-w-[960px] md:mx-auto md:flex'>
                <Image
                    src='//a.storyblok.com/f/71234/1200x254/ac0e50b195/top-badge-section-two.svg'
                    alt='topBadge'
                    className='z-[-1] top-0 absolute'
                    loading='lazy'
                    width={1200}
                    height={254}
                />
                <Image
                    src='//a.storyblok.com/f/71234/392x388/3db0e5f95b/right-badge-section-two.svg'
                    alt='rightBadge'
                    className='top-0 right-[15%] z-[-2] absolute'
                    loading='lazy'
                    width={392}
                    height={388}
                />
                <Image
                    src='//a.storyblok.com/f/71234/266x532/474ffaf093/left-badge-section-two.svg'
                    alt='leftBadge'
                    className='top-[11%] left-0 z-[-2] absolute'
                    loading='lazy'
                    width={266}
                    height={532}
                />
                <Image
                    src='//a.storyblok.com/f/71234/1200x255/6f2747348a/bottom-badge-section-two.svg'
                    alt='bottomBadge'
                    className='z-[-1] bottom-0 absolute'
                    loading='lazy'
                    width={1200}
                    height={255}
                />
                <Image
                    src='//a.storyblok.com/f/71234/369x107/34835a85cf/mobile-top-badge.svg'
                    className='z-[-1] absolute md:hidden'
                    alt='mobileTopBadge'
                    loading='lazy'
                    width={369}
                    height={107}
                />
                <Image
                    src='//a.storyblok.com/f/71234/357x327/4c14f884eb/mobile-right-badge-one.svg'
                    className='z-[-1] md:hidden top-[1%] right-0 absolute'
                    alt='mobileRightBadgeOne'
                    loading='lazy'
                    width={357}
                    height={327}
                />
                <Image
                    src='//a.storyblok.com/f/71234/164x423/c01ae32783/mobile-right-badge-two.svg'
                    alt='mobileRightBadgeTwo'
                    className='z-[-1] md:hidden top-[30%] right-0 absolute'
                    loading='lazy'
                    width={164}
                    height={423}
                />
                <Image
                    src='//a.storyblok.com/f/71234/139x374/3223c20d07/mobile-left-badge.svg'
                    alt='mobileLeftBadge'
                    className='z-[-1] top-[45%] left-0 absolute md:hidden'
                    loading='lazy'
                    width={139}
                    height={374}
                />
                <Image
                    src='//a.storyblok.com/f/71234/375x147/f6f3c7c972/mobile-bottom-badge.svg'
                    alt='mobileBottomBadge'
                    className='z-[-1] left-0 bottom-0 absolute'
                    loading='lazy'
                    width={375}
                    height={147}
                />

                <div className='w-full mx-auto flex max-w-[655px] pt-[240px] px-[48px] flex-col md:flex-row lg:max-w-[820px]'>
                    <div className='w-full mb-[108px] md:max-w-[250px] md:self-center'>
                        <h2 className='h2-title'>
                            <span>
                                <b>Why </b>
                            </span>
                        </h2>
                        <h2 className='h2-title'>
                            <span>
                                <b>EF SET?</b>
                            </span>
                        </h2>
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='section-two-item'>
                            <div className='max-w-[230px] lg:max-w-[304px]'>
                                <div className='mb-4'>
                                    <Image
                                        src='//a.storyblok.com/f/71234/32x33/2dd9a91916/shield-icon.svg'
                                        alt='infoIcon'
                                        width={32}
                                        height={33}
                                    />
                                </div>
                                <h4 className='mb-2 h4-title'>It's Reliable.</h4>
                                <p>
                                    <span>
                                        <b>Created by experts. </b>
                                    </span>
                                    <span className='text-base'>
                                        This online English proficiency test was developed over 5 years with leading
                                        scientists in the field of English assessment.
                                    </span>
                                    <span>
                                        <a href='/about/' target='_self' className='font-semibold underline'>
                                            Learn more.
                                        </a>
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className='justify-end section-two-item'>
                            <div className='max-w-[230px] lg:max-w-[304px]'>
                                <div className='mb-4'>
                                    <Image
                                        src='//a.storyblok.com/f/71234/47x32/9890bc01b2/phone-icon.svg'
                                        alt='infoIcon'
                                        width={47}
                                        height={32}
                                    />
                                </div>
                                <h4 className='mb-2 h4-title'>It's Accessible.</h4>
                                <p>
                                    <span>
                                        <b>An English level test for everyone. </b>
                                    </span>
                                    <span className='text-base'>
                                        EF SET is available on any desktop, tablet, or mobile device. All you need is an
                                        internet connection and less than an hour of your time.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className='section-two-item'>
                            <div className='max-w-[230px] lg:max-w-[304px]'>
                                <div className='mb-4'>
                                    <Image
                                        src='//a.storyblok.com/f/71234/30x30/e23916f3d1/gift-icon.svg'
                                        alt='infoIcon'
                                        width={30}
                                        height={30}
                                    />
                                </div>
                                <h4 className='mb-2 h4-title'>It's Free.</h4>
                                <p>
                                    <span>
                                        <b>Why pay for accurate results? </b>
                                    </span>
                                    <span className='text-base'>
                                        There shouldn't be any barriers to testing your English. English tests are an
                                        important tool for building English proficiency.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
