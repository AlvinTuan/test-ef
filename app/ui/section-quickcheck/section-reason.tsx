import Image from "next/image";

export default function SectionReason() {
    return (
        <div className='reason-section'>
            <div className='w-full relative md:flex md:mx-auto md:max-w-[960px] lg:max-w-[1200px]'>
                <div className='w-full flex flex-col relative pt-[72px] px-[60px] pb-12 xl:px-[120px] lg:pb-[72px]'>
                    <h2 className='text-3xl font-bold text-center pb-[72px]'>Why take our English quiz?</h2>
                    <div className='md:mx-auto md:flex'>
                        <div className='w-full flex mb-[72px] flex-col md:max-w-[304px] md:mb-0 md:mr-4'>
                            <Image
                                className='mb-4'
                                src='//a.storyblok.com/f/79503/40x30/9a8993cbfa/icon1.svg'
                                alt='icon1'
                                width={40}
                                height={30}
                            />
                            <h4 className='pb-2 text-2xl font-bold'>Anywhere, anytime</h4>
                            <p className='text-base font-normal'>
                                Take the English quiz on your laptop, tablet, or mobile.
                            </p>
                        </div>
                        <div className='w-full flex mb-[72px] flex-col md:max-w-[304px] md:mb-0 md:mr-4'>
                            <Image
                                className='mb-4 '
                                src='//a.storyblok.com/f/79503/32x32/d679426f10/icon2.svg'
                                alt='icon2'
                                width={32}
                                height={32}
                            />
                            <h4 className='pb-2 text-2xl font-bold'>A quick CEFR assessment</h4>
                            <p className='text-base font-normal'>
                                Ideal for a quick estimate of your English grammar, vocabulary, &amp; listening skills.
                            </p>
                        </div>
                        <div className='w-full flex mb-[72px] flex-col md:max-w-[304px] md:mb-0 md:mr-4'>
                            <Image
                                className='mb-4 '
                                src='//a.storyblok.com/f/79503/26x32/3c90e97472/icon3.svg'
                                alt='icon3'
                                width={26}
                                height={32}
                            />
                            <h4 className='pb-2 text-2xl font-bold'>Anywhere, anytime</h4>
                            <p className='text-base font-normal'>
                                Take the English quiz on your laptop, tablet, or mobile.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
