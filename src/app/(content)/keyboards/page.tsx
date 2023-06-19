"use client";

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "@/app/swiper.css";
import "swiper/css/pagination";

import KeyboardCard from "@/components/KeyboardCard";

export default function Keyboards() {
  return (
    <>
      <div className="flex flex-col items-center p-5 md:pt-10">
        <h1 className="text-3xl">Keyboards</h1>
      </div>
      <div className="p-5 md:px-20 md:py-10">
        <h2 className="pt-1 text-2xl">MB Series</h2>
        <p className="py-2">
          Projects in the MB series all started off as personal experiments with
          the intent to learn and try different things. These projects typically
          feature simple case constructions and fun layouts.
        </p>
      </div>
      <Swiper
        centeredSlides={true}
        modules={[Navigation, Pagination, A11y]}
        navigation={true}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="flex justify-center">
            <KeyboardCard
              title="MB-44"
              body="A 12.75u 40% keyboard with a fun 65%-esque blocker separating the arrow cluster."
              href="/keyboards/mb44"
              img="/images/keyboards/mb44_kokaloo.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <KeyboardCard
              title="MB-LB"
              body="A 12.5u WKL main cluster + macro column 40% keyboard. Features an LED light bar and supports up to 4 rotary encoders."
              href="/keyboards/mblb"
              img="/images/keyboards/mblb.jpg"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <KeyboardCard
              title="MB-TKL"
              body="A TKL style 40% keyboard that features a split 12.75u main cluster."
              href="/keyboards/mbtkl"
              img="/images/keyboards/mbtkl/mbtkl_hero.png"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="p-5 md:px-20 md:py-10">
        <h2 className="pt-5 text-2xl">Mythics Series</h2>
        <p className="py-2">
          Projects in the Mythics series all share a similar aesthetic. Inspired
          by older TX-Keyboards designs (TX-75 and TX-CP) and ai03&apos;s
          reference designs. Mythic series keyboards feature a weight and an
          engraving of a winged mythical creature that is the namesake of the
          keyboard. These projects also provided an opportunity to try different
          mounting solutions.
        </p>
      </div>
      <Swiper
        centeredSlides={true}
        modules={[Navigation, Pagination, A11y]}
        navigation={true}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="flex justify-center">
            <KeyboardCard
              title="Pegasus"
              body="A 40% keyboard with a 12.75u WKL layout and 0.75u blockers. Features a gasket mounted integrated half-plate."
              href="/keyboards/pegasus"
              img="/images/keyboards/pegasus/pegasus_top.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <KeyboardCard
              title="Griffin"
              body="A tried and true 60% keyboard layout that features a gummy o-ring mounting solution."
              href="/keyboards/griffin"
              img="/images/keyboards/griffin/griffin.jpg"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="p-10"></div>
    </>
  );
}
