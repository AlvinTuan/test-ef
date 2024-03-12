/* eslint-disable react/no-unescaped-entities */
import CardTest from "@/app/components/card-test/card-test"
import Image from "next/image"
import CardAbout from "@/app/components/card-about/card-about"
import Button from "@/app/components/button/button"
import { criteriaOfEFset, criteriaOfQuickCheck } from "@/app/lib/placeholder-data"
import { StyleProvider } from "@ant-design/cssinjs"
import { Input } from "antd"

export default function Page() {
    return (
        <div className='wrapper'>
            <div className='relative w-full bgColorGreen'>
                <div>
                    <Image
                        src='//a.storyblok.com/f/79503/251x250/b89f6ffac5/stage-mobile-badge.svg'
                        className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:hidden'
                        alt='mobileBadge'
                        width={251}
                        height={250}
                    />
                </div>
                <div>
                    <Image
                        src='//a.storyblok.com/f/79503/450x450/d3e3abe896/stage-center-badge.svg'
                        className='hidden -translate-x-1/2 -translate-y-1/2 md:flex md:absolute md:top-1/2 md:left-1/2'
                        alt='desktopCenterBadge'
                        width={450}
                        height={450}
                    />
                    <Image
                        src='//a.storyblok.com/f/79503/130x375/111cd406e9/stage-right-badge.svg'
                        className='hidden md:absolute md:top-1/2 md:right-0 md:flex md:-translate-y-1/2'
                        alt='desktopRightBadge'
                        width={130}
                        height={375}
                    />
                    <Image
                        src='//a.storyblok.com/f/79503/130x375/111cd406e9/stage-right-badge.svg'
                        className='hidden md:absolute md:top-1/2 md:left-0 md:flex md:scale-x-[-1] md:-translate-y-1/2'
                        alt='desktopLeftBadge'
                        width={130}
                        height={375}
                    />
                </div>
                <div className='section-about'>
                    <div className='py-[72px] px-6 md:mx-auto md:py-[192px] md:px-0'>
                        <h1 className='text-3xl font-bold text-white mx-auto max-w-[250px] text-center pb-3 md:text-[37px] md:max-w-[476px] leading-[2.75rem]'>
                            Research and Design behind the EF SET
                        </h1>
                    </div>
                </div>
            </div>
            <div className='section-about'>
                <div className='w-full p-6 pt-12 pb-0 md:pr-[120px] lg:pl-[120px]'>
                    <h2 className='text-2xl font-bold pb-3 md:text-3xl md:max-w-[623px]'>Overview</h2>
                    <div className='max-w-[623px] pb-6'>
                        <p className='mb-6 text-lg font-normal leading-7'>
                            <span>
                                Our goal is to make English proficiency testing not only reliable, but also
                                affordable, simple to use, and always accessible. At EF SET we are applying
                                sophisticated research and development to provide objectively scored standardized
                                English tests for all level learners - from beginner to advanced - for free.
                            </span>
                        </p>
                        <p className='mb-6 text-lg font-normal leading-7'>
                            <span>
                                To create our state-of-the-art testing platform, we assembled the industry's top
                                experts in language assessment, large scale testing and psychometrics. To learn
                                more, please download our whitepaper titled the EF SET Academic Report. It details
                                our approach to test design, test specifications, alignment to the Common European
                                Framework of Reference, form assembly, item analysis, standards-setting, and ongoing
                                quality control.
                            </span>
                        </p>
                        <p className='mb-6 text-lg font-normal leading-7'>
                            <span>For more information, please contact us at </span>
                            <span>
                                <a href='mailto:info@efset.org' style={{ textDecoration: 'underline' }}>
                                    info@efset.org
                                </a>
                            </span>
                        </p>
                    </div>
                    <hr className='ct-line' />
                </div>
            </div>
            <div className='section-about'>
                <div className='w-full p-6 md:px-[120px]'>
                    <h2 className='text-2xl font-bold'>Read about our research and development:</h2>
                    <div className='pt-9 md:flex'>
                        <CardAbout cardName='EF SET Academic Report' />
                    </div>
                    <hr className='ct-line' />
                </div>
            </div>
            <div className='section-about'>
                <div className='w-full p-6 md:px-[120px]'>
                    <h2 className='text-2xl font-bold'>
                        Read how EF SET's validity and reliability compares with other English tests:
                    </h2>
                    <div className='pt-6 md:flex'>
                        <CardAbout cardName='Summary'></CardAbout>
                        <CardAbout cardName='EF SET and TOEFL'></CardAbout>
                        <CardAbout cardName='EF SET and IELTS'></CardAbout>
                    </div>
                    <hr className='ct-line' />
                </div>
            </div>
            <div className='section-about'>
                <div className='w-full p-6 pt-12 pb-0 md:pr-[120px] lg:pl-[120px]'>
                    <h2 className='text-2xl font-bold pb-3 md:text-3xl md:max-w-[623px]'>
                        EF SET powers the EF EPI research
                    </h2>
                    <div className='max-w-[623px] pb-6'>
                        <p className='mb-6 text-lg'>
                            <span>The </span>
                            <span>
                                <a
                                    href='https://www.ef.com/epi/'
                                    rel='noopener'
                                    style={{ textDecoration: 'underline', fontWeight: 600 }}
                                >
                                    EF English Proficiency Index
                                </a>
                            </span>
                            <span>
                                {' '}
                                (EF EPI) is the world’s largest ranking of countries/regions by adult English
                                skills. Published annually, the EF EPI is an important international benchmark for
                                adult English proficiency. The EF EPI reports identify the most common pitfalls and
                                highlight the most effective strategies for improving English proficiency. The EF
                                EPI calculates a country’s/region's average adult English skill level using data
                                from three different versions of the EF SET.
                            </span>
                        </p>
                    </div>
                    <Button
                        classBgTextColor='ct-btnAboutEF text-white mb-12'
                        label='EF SET and the EF EPI'
                        toLink=''
                    ></Button>
                    <hr className='ct-line' />
                </div>
            </div>
            <div className='particle-section-about'>
                <div className='section-about'>
                    <div className='w-full flex relative pt-14 px-6 flex-col pb-[111.6px] md:pt-12'>
                        <h4 className='pb-3 text-2xl font-bold md:text-3xl md:self-center md:pb-12'>
                            Test your English now
                        </h4>
                        <div className='flex flex-col mx-auto md:gap-x-6 md:flex-row'>
                            <CardTest
                                minitues={50}
                                typeTest='EF SET'
                                title='Certify your English proficiency'
                                criteriaList={criteriaOfEFset}
                                labelBtn='Take the test'
                                textColor='text-tertiary'
                                btnColor='ct-btnColorEven'
                            ></CardTest>
                            <CardTest
                                minitues={15}
                                typeTest='Quick Check'
                                title='Check your English level'
                                criteriaList={criteriaOfQuickCheck}
                                labelBtn='Take the quiz'
                                textColor='text-secondary'
                                btnColor='ct-btnColorOdd'
                            ></CardTest>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}