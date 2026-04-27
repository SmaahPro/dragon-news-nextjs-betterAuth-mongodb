"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
    const pathname = usePathname();

    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`px-2 py-1 font-medium transition-all duration-200 ${isActive
                    ? "text-amber-500 border-b-2 border-amber-500 hover:text-amber-500"
                    : "text-gray-700 hover:text-blue-700"
                }`}
        >
            {children}
        </Link>
    );
};

export default NavLink;