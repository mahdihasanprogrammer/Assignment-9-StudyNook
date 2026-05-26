"use client"
import { li } from "framer-motion/client";
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLink = ({href, children}) => {
    const pathName = usePathname();
    return (
        <li className="hover:text-[#06B6D4] transition-all duration-300">
            <Link href={href}
            className={`${pathName===href && 'text-[#06B6D4]'}`}>
            {children}</Link>
        </li>
    );
};

export default NavLink;