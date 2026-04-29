"use client";

import Link from "next/link";
import Image from "next/image";
import userAvater from "@/assets/user.png";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const isLoginPage = pathname === "/login";

    return (
        <div className="container mx-auto flex justify-between items-center mt-6 mb-6">
            <div></div>

            <div>
                <ul className="flex justify-between items-center text-[#706F6F] gap-6">
                    <li> <NavLink href={"/"}>Home</NavLink> </li>
                    <li> <NavLink href={"/about-us"}>About</NavLink> </li>
                    <li> <NavLink href={"/career"}>Career</NavLink> </li>
                </ul>
            </div>

            <div className="flex items-center gap-3">
                {!isLoginPage && (
                    <>
                        <Image
                            src={userAvater}
                            alt="User Avater"
                            width={44}
                            height={44}
                            className="rounded-full"
                        />
                        <Link href={"/login"}>
                            <button className="bg-[#403F3F] text-white px-9 py-2 font-semibold hover:bg-black transition-all">
                                Login
                            </button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;