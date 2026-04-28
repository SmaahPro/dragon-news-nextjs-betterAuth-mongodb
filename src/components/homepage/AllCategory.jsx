"use client";

import { useEffect, useState } from "react";

const AllCategory = ({ categoryId, setCategoryId }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data.data.news_category));
    }, []);

    return (
        <div>
            <h2 className="font-bold text-2xl">All Category</h2>

            <ul className="flex flex-col gap-3 mt-6">
                {categories.map((category) => (
                    <li
                        key={category.category_id}
                        onClick={() => setCategoryId(category.category_id)}
                        className={`p-2 rounded-md font-bold text-center text-sm cursor-pointer ${categoryId === category.category_id
                            ? "bg-amber-500"
                            : "bg-slate-100"
                            }`}
                    >
                        {category.category_name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllCategory;