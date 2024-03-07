import Button from "@/app/components/button/button"
import Image from "next/image"

export default function SectionOne() {
    return (
        <div className='section-one'>
            <div className='lg:max-w-[1200px] lg:pt-16 mx-auto pt-[52px] md:px-28 pb-6'>
                <div className='flex flex-col text-white lg:items-center lg:flex lg:item lg:flex-row'>
                    <div>
                        <h1 className='md:pb-6 md:leading-desktopTitle1 h1-title'>
                            The first free standardized English test online
                        </h1>
                        <p className='mt-4 md:pr-8 md:pb-8'>
                            Take the EF Standard English Test and get an accurate assessment of your English level from
                            home
                        </p>
                        <Button
                            toLink='/quick-check'
                            classBgTextColor='bg-white text-primary'
                            label='Test your English now'
                        ></Button>
                    </div>
                    <Image src={'/desktop-badge.svg'} alt="destop badge" width={405} height={420} className='mt-5 mx-auto' />
                </div>
            </div>
        </div>
    )
}
