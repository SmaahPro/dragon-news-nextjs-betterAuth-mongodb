"use client";

import Link from "next/link";
import Image from "next/image";
import userAvater from "@/assets/user.png";
import NavLink from "./NavLink";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { data: session, isPending } = authClient.useSession();

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login");
                    router.refresh();
                },
            },
        });
    };

    if (!mounted) {
        return <div className="container mx-auto mt-6 mb-6 h-[44px]"></div>;
    }

    const isLoginPage = pathname === "/login";
    const isRegisterPage = pathname === "/register";

    return (
        <nav className="relative container mx-auto mt-6 mb-6 px-4">
            <div className="flex justify-between items-center">
                <div className="flex-1 md:hidden">
                    <button onClick={toggleMenu} className="text-[#403F3F]">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                <div className="hidden md:flex flex-1 justify-center">
                    <ul className="flex items-center text-[#706F6F] gap-6 font-medium">
                        <li> <NavLink href={"/"}>Home</NavLink> </li>
                        <li> <NavLink href={"/about-us"}>About</NavLink> </li>
                        <li> <NavLink href={"/career"}>Career</NavLink> </li>
                    </ul>
                </div>

                <div className="flex-1 flex justify-end items-center gap-3">
                    {!isPending && session ? (
                        <div className="flex items-center gap-3">
                            <span className="text-[#403F3F] font-medium text-sm hidden sm:block">
                                {session.user.name}
                            </span>
                            <Image
                                src={session.user.image || userAvater}
                                alt="User"
                                width={40}
                                height={40}
                                className="rounded-full border border-gray-200 object-cover w-10 h-10"
                            />
                            <button
                                onClick={handleLogout}
                                className="bg-[#403F3F] text-white px-5 md:px-7 py-2 font-semibold hover:bg-black transition-all rounded-sm text-sm"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        (!isLoginPage && !isRegisterPage) && (
                            <div className="flex items-center gap-3">
                                <Image
                                    src={userAvater}
                                    alt="Default Avatar"
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                                <Link href={"/login"}>
                                    <button className="bg-[#403F3F] text-white px-7 md:px-9 py-2 font-semibold hover:bg-black transition-all rounded-sm text-sm">
                                        Login
                                    </button>
                                </Link>
                            </div>
                        )
                    )}
                </div>
            </div>

            <div className={`
                md:hidden absolute left-0 right-0 top-full bg-white shadow-lg z-50 transition-all duration-300 ease-in-out overflow-hidden
                ${isOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"}
            `}>
                <ul className="flex flex-col items-center py-5 text-[#706F6F] gap-4 font-medium border-t">
                    <li onClick={() => setIsOpen(false)}> <NavLink href={"/"}>Home</NavLink> </li>
                    <li onClick={() => setIsOpen(false)}> <NavLink href={"/about-us"}>About</NavLink> </li>
                    <li onClick={() => setIsOpen(false)}> <NavLink href={"/career"}>Career</NavLink> </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;