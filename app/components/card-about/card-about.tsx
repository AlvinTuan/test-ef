interface CardAboutProps {
    cardName: string
}
export default function CardAbout({ cardName }: CardAboutProps) {
    return (
        <div className='ct-paper rounded shadow-card w-[222px] h-[262px] flex p-6 mx-auto md:mx-0 mb-8 flex-col justify-between md:mr-6'>
            <h4 className='w-full text-2xl font-bold'>{cardName}</h4>
            <a
                href='//a.storyblok.com/f/79503/x/6c8302dc10/ef-set-academic-development-report.pdf'
                target='_blank'
                rel='noopener'
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6 mb-3'
                >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3' />
                </svg>
                <p className='text-lg font-normal hover:text-focus_hover'>Download</p>
            </a>
        </div>
    )
}
