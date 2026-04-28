import AllCategory from "@/components/homepage/AllCategory";
import RightSide from "@/components/homepage/RightSidebar";

export default function Home() {
  return (
    <div className="container mx-auto grid grid-cols-12 gap-6 mt-24">
      <div className="col-span-3">
        <AllCategory />
      </div>

      <div className="col-span-6 font-bold text-2xl">
        All News
      </div>

      <div className="col-span-3">
        <RightSide />
      </div>
    </div>
  );
}