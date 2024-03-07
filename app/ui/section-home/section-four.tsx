import Button from "@/app/components/button/button"
import Image from "next/image"
Button

export default function SectionFour() {
    return (
        <div className='section-four'>
            <div className='ct-section-body'>
                <Image
                    src='//a.storyblok.com/f/71234/1200x255/14eab92940/s4-top-badge.svg'
                    width={1200}
                    height={255}
                    className='hidden md:top-0 md:w-full md:flex md:absolute'
                    alt="top badge"
                />
                <div className='w-full flex relative py-[72px] px-6 flex-col lg:items-end lg:py-[156px] lg:px-[84px] lg:flex-row xl:px-[120px]'>
                    <Image
                        src='//a.storyblok.com/f/71234/91x91/2aade672ab/s4-mobile-image.svg'
                        className='pb-8 lg:hidden'
                        alt='mobileImage'
                        loading='lazy'
                        width={91}
                        height={91}
                    />
                    <div className='flex flex-col items-center w-full md:items-start'>
                        <h2 className='text-2xl font-bold leading-10 text-center pb-6 lg:text-3xl lg:max-w-[468px] lg:text-left lg:pr-9'>
                            A scalable English testing solution for any organization
                        </h2>
                        <p className='text-[#333333] max-w-[300px] md:max-w-[500px] lg:text-lg lg:max-w-[468px] self-center lg:self-auto text-center lg:text-left pb-8'>
                            We have helped over 3,000 schools and organizations around the world define proficiency
                            benchmarks using our English level test.
                        </p>
                        <Button
                            toLink=''
                            classBgTextColor='ct-btnColorOdd text-white'
                            label='English assessment solutions'
                        ></Button>
                    </div>
                    <div className='hidden lg:flex lg:w-full lg:h-full'>
                        <Image
                            src='//a.storyblok.com/f/71234/391x318/af480f62c1/s4-desktop-image.svg'
                            alt='desktopImage'
                            loading='lazy'
                            width={391}
                            height={318}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
