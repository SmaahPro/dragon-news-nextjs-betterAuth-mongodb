"use client";

import { useState } from "react";
import AllCategory from "@/components/homepage/AllCategory";
import RightSide from "@/components/homepage/RightSidebar";
import NewsCategory from "./category/[id]/page";

export default function Home() {
  const [categoryId, setCategoryId] = useState("01");

  return (
    <div className="container mx-auto grid grid-cols-12 gap-6 mt-24">
      <div className="col-span-3">
        <AllCategory
          categoryId={categoryId}
          setCategoryId={setCategoryId}
        />
      </div>

      <div className="col-span-6">
        <NewsCategory categoryId={categoryId} />
      </div>

      <div className="col-span-3">
        <RightSide />
      </div>
    </div>
  );
}