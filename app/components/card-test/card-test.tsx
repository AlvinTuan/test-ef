import { Criteria } from "@/app/lib/definitions";
import Button from "@/app/components/button/button";
import Link from "next/link";

interface CardTestProps {
    minitues: number;
    typeTest: string;
    title: string;
    criteriaList: Criteria[];
    labelBtn: string;
    textColor: string;
    btnColor: string;
};
export default function CardTest({
    minitues,
    typeTest,
    title,
    criteriaList,
    labelBtn,
    textColor,
    btnColor
}: CardTestProps) {
    return (
        <div className='section-three__card '>
            <div className={`flex items-center pb-6 ${textColor}`}>
                <h6 className='mr-3 text-5xl font-bold lg:text-[88px]'>{minitues}</h6>
                <div>
                    <p className='max-w-[760px] text-base font-normal'>
                        <span>
                            <b>MIN</b>
                        </span>
                    </p>
                    <h3 className='text-3xl font-bold'>
                        <span>
                            <b>{typeTest}</b>
                        </span>
                    </h3>
                </div>
            </div>
            <hr className='ct-line' />
            <div className='flex md:h-full md:pl-0'>
                <div className='flex flex-col justify-between h-full'>
                    <h5 className='pb-4 -mr-2 text-xl font-bold pt-9'>{title}</h5>
                    <ul className='ml-4 text-base list-disc'>
                        {criteriaList.map((item) => (
                            <li key={item.id} className='text-sm md:text-base'>
                                {item.isLink ? (
                                    <Link href={item.toLink || ''} className='hover:text-focus_hover'>
                                        <p className='ct-p'>
                                            <span>{item.criteria}</span>
                                        </p>
                                    </Link>
                                ) : (
                                    <p className='ct-p'>
                                        <span>{item.criteria}</span>
                                    </p>
                                )}
                            </li>
                        ))}
                    </ul>
                    <Button
                        toLink='/quick-check/take-test'
                        classBgTextColor={`${btnColor} text-white`}
                        label={labelBtn}
                    ></Button>
                </div>
            </div>
        </div>
    )
}