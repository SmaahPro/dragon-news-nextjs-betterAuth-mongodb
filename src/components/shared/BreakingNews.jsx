"use client";

import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/category/01")
            .then((res) => res.json())
            .then((data) => setNews(data.data));
    }, []);

    const titles = news.map((item) => item.title).join("   •••   ");

    return (
        <div className="flex justify-between gap-4 items-center bg-gray-200 py-4 px-5 container mx-auto rounded-3xl">
            <button className="btn bg-red-700 text-white hover:bg-red-800 border-none">
                Latest News
            </button>

            <Marquee pauseOnHover={true} speed={60} className="font-medium">
                {titles || "Loading latest breaking news..."}
            </Marquee>
        </div>
    );
};

export default BreakingNews;