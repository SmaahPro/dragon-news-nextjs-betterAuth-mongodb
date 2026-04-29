"use client";

import { usePathname } from "next/navigation";
import BreakingNews from "@/components/shared/BreakingNews";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";

export default function MainLayout({ children }) {
    const pathname = usePathname();

    const isNewsDetailsPage = pathname.includes("/news/");

    return (
        <body>
            {!isNewsDetailsPage && (
                <>
                    <Header />
                    <BreakingNews />
                    <Navbar />
                </>
            )}

            <main>{children}</main>
        </body>
    );
}