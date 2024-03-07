import Link from "next/link"
import clsx from "clsx"

interface ButtonProps {
    classBgTextColor: string
    label: string
    toLink: string | ''
    className?: string
}

export default function Button({ classBgTextColor, label, toLink, className }: ButtonProps) {
    return (
        <button className={clsx('flex flex-col items-center mt-8 lg:flex-row', className)} >
            <Link
                href={`${toLink}`}
                className={`px-6 h-14 md:h-12 text-base md:text-sm cursor-pointer font-semibold flex items-center rounded-full shadow-btn ${classBgTextColor}`}
            >
                <span>{label}</span>
            </Link>
        </button>
    )
}
