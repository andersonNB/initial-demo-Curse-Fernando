import { CSSProperties } from "react";
import Link from "next/link"
import { useRouter } from "next/router"


const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',
}

export const ActiveLink = ({ href, text }: { href: string, text: string },) => {

    const { pathname } = useRouter();

    return (
        <Link href={href} style={pathname === href ? style : {}} >{text}</Link>
    )
}