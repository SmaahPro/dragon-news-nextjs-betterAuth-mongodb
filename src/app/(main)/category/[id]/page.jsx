"use client";

import { useEffect, useState } from "react";
import { FaRegBookmark, FaShareAlt, FaEye, FaStar } from "react-icons/fa";

const NewsCategory = ({ categoryId }) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch(
            `https://openapi.programming-hero.com/api/news/category/${categoryId}`
        )
            .then((res) => res.json())
            .then((data) => setNews(data.data));
    }, [categoryId]);

    return (
        <div>
            <h2 className="font-bold text-2xl mb-5">Dragon News Home</h2>

            <div className="space-y-6 h-[900px] overflow-y-auto pr-2">
                {news.length === 0 ? (
                    <div className="border border-gray-200 rounded-lg bg-white p-10 text-center">
                        <h2 className="text-2xl font-bold text-gray-700">
                            No News Found
                        </h2>

                        <p className="text-gray-500 mt-2">
                            There is no news available in this category.
                        </p>
                    </div>
                ) : (
                    news.map((item) => (
                        <div
                            key={item._id}
                            className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                        >
                            <div className="flex justify-between items-center bg-gray-100 px-4 py-4">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={item.author?.img || "/avatar.png"}
                                        alt="author"
                                        className="w-10 h-10 rounded-full object-cover"
                                    />

                                    <div>
                                        <h3 className="font-bold text-sm">
                                            {item.author?.name || "Unknown Author"}
                                        </h3>

                                        <p className="text-xs text-gray-500">
                                            {item.author?.published_date?.slice(0, 10)}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 text-gray-500 text-lg">
                                    <FaRegBookmark className="cursor-pointer hover:text-black" />
                                    <FaShareAlt className="cursor-pointer hover:text-black" />
                                </div>
                            </div>

                            <div className="p-4">
                                <h2 className="text-2xl font-bold leading-9 mb-5">
                                    {item.title}
                                </h2>

                                <img
                                    src={item.thumbnail_url}
                                    alt="news"
                                    className="w-full h-72 object-cover rounded-lg mb-5"
                                />

                                <p className="text-gray-600 leading-8 text-lg">
                                    {item.details.slice(0, 180)}...
                                </p>

                                <button className="text-orange-500 font-bold mt-3">
                                    Read More
                                </button>
                            </div>

                            <div className="border-t border-gray-200 px-4 py-4 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="flex text-orange-400 gap-1">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>

                                    <span className="text-gray-600">
                                        {item.rating?.number || 0}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 text-gray-500">
                                    <FaEye />
                                    <span>{item.total_view || 0}</span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default NewsCategory;