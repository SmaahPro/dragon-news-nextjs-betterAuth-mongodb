async function getCategories() {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/news/categories"
    );

    const data = await res.json();
    return data;
}

const AllCategory = async () => {
    const categories = await getCategories();

    return (
        <div>
            <h2 className="font-bold text-xl">All Category</h2>

            <ul className="flex flex-col gap-3 mt-6">
                {categories.data.news_category.map((category) => (
                    <li
                        key={category.category_id}
                        className="bg-slate-100 p-2 rounded-md font-bold text-center text-sm"
                    >
                        {category.category_name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllCategory;