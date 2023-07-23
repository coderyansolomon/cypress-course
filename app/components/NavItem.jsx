import Link from "next/link"

export default function NavItem({label,path}){
    return (
        <Link href={path}>
            {label}
        </Link>
    )
}