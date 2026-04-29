"use client";

import Link from "next/link";
import Image from "next/image";
import userAvater from "@/assets/user.png";
import NavLink from "./NavLink";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useState, useEffect } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    const { data: session, isPending } = authClient.useSession();

    useEffect(() => {
        setMounted(true);
    }, []);

    const isLoginPage = pathname === "/login";
    const isRegisterPage = pathname === "/register";

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

    return (
        <div className="container mx-auto flex justify-between items-center mt-6 mb-6 px-4">
            <div className="flex-1"></div>

            <div className="flex-1">
                <ul className="flex justify-center items-center text-[#706F6F] gap-6">
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
                            width={44}
                            height={44}
                            className="rounded-full border border-gray-200 object-cover"
                        />
                        <button
                            onClick={handleLogout}
                            className="bg-[#403F3F] text-white px-7 py-2 font-semibold hover:bg-black transition-all rounded-sm"
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
                                width={44}
                                height={44}
                                className="rounded-full"
                            />
                            <Link href={"/login"}>
                                <button className="bg-[#403F3F] text-white px-9 py-2 font-semibold hover:bg-black transition-all rounded-sm">
                                    Login
                                </button>
                            </Link>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Navbar;