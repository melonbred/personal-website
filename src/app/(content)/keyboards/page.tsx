"use client";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import KeyboardCard from "@/components/KeyboardCard";

export default function Keyboards() {
  return (
    <>
      <div className="min-w-screen flex flex-col items-center pb-5 pt-24">
        <h1 className="pt-4 text-3xl">Keyboards</h1>
        <div className="min-w-screen p-4 md:p-10">
          <h2 className="pt-5 text-2xl">MB Series</h2>
          <p className="pb-5 pt-2">
            Projects in the MB series all started off as personal experiments
            with the intent to learn and try different things. These projects
            typically feature simple case construcutions. All of these projects
            start with my initials due to the nature of them being perosnal
            projects and my lack of originality and foresight.
          </p>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-7 text-center lg:grid-cols-2 xl:grid-cols-3">
              <KeyboardCard
                title="MB-44"
                body="A 12.75u 40% keyboard with a fun 65%-esque blocker separating the arrow cluster."
                href="/keyboards/mb44"
                img="/images/keyboards/mb44_kokaloo.jpg"
              />
              <KeyboardCard
                title="MB-LB"
                body="A 12.5u WKL main cluster + macro column 40% keyboard. Features an LED light bar and supports up to 4 rotary encoders."
                href="/keyboards/mblb"
                img="/images/keyboards/mblb.jpg"
              />
              <KeyboardCard
                title="MB-TKL"
                body="A TKL style 40% keyboard that features a split 12.75u main cluster."
                href="/keyboards/mbtkl"
                img="/images/keyboards/mbtkl_md.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
