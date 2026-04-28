import Header from "@/components/shared/Header";
import RightSidebar from "@/components/homepage/RightSidebar";

const NewsDetailsPageLayout = ({ children }) => {
    return (
        <div className="bg-[#F3F3F3] min-h-screen pb-10">
            <Header />

            <main className="container mx-auto grid grid-cols-12 gap-6 mt-10 px-4">
                <div className="col-span-12 md:col-span-9">
                    <h2 className="font-bold text-xl mb-4 text-[#403F3F]">Dragon News</h2>
                    {children}
                </div>

                <div className="col-span-12 md:col-span-3">
                    <RightSidebar />
                </div>
            </main>
        </div>
    );
};

export default NewsDetailsPageLayout;