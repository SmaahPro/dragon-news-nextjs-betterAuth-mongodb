import Link from "next/link";

async function getSingleNews(id) {
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`, {
            cache: "no-store",
        });
        const data = await res.json();
        return data.data?.[0];
    } catch (error) {
        return null;
    }
}

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const news = await getSingleNews(id);

    if (!news) {
        return <div className="text-center mt-10">News Not Found...</div>;
    }

    return (
        <div className="border border-[#E7E7E7] rounded-lg p-7 bg-white shadow-sm">
            <img
                src={news.image_url}
                alt={news.title}
                className="w-full h-auto object-cover rounded-md mb-6"
            />

            <h1 className="text-3xl font-bold text-[#403F3F] leading-snug mb-4">
                {news.title}
            </h1>

            <p className="text-[#706F6F] leading-7 mb-8 text-justify">
                {news.details}
            </p>

            <Link
                href="/"
                className="inline-flex items-center gap-2 bg-[#D72050] text-white px-6 py-3 rounded-none font-medium hover:bg-[#b01a42] transition-all"
            >
                <span>←</span> All News
            </Link>
        </div>
    );
};

export default NewsDetailsPage;