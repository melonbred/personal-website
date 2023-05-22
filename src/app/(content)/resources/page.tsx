"use client";

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import KeyboardCard from "@/components/KeyboardCard";

export default function Resources() {
  return (
    <>
      <div className="min-w-screen flex flex-col items-center pb-5 pt-24">
        <h1 className="pt-4 text-3xl">Resources</h1>
        <div className="min-w-screen p-4 md:p-10">
          <h2 className="pt-5 text-2xl">Work In Progress</h2>
        </div>
      </div>
    </>
  );
}
