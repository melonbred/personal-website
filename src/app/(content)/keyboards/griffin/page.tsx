"use client";

import Image from "next/image";

import ImageCard from "@/components/ImageCard";
import KeyboardSpecTable from "@/components/KeyboardSpecTable";

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "@/app/swiper.css";
import "swiper/css/pagination";
import Link from "next/link";

export default function Griffin() {
  return (
    <>
      <div className="p-3">
        <Swiper
          centeredSlides={true}
          modules={[Navigation, Pagination, A11y]}
          navigation={true}
          spaceBetween={200}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="relative aspect-video">
              <Image
                alt="griffin btm"
                src="/images/keyboards/griffin/griffin_btm.png"
                fill={true}
                className="rounded-2xl object-cover"
              />
              <p className="absolute bottom-1 left-2 text-sm text-black">
                Courtesy of P3D
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative aspect-video">
              <Image
                alt="griffin top"
                src="/images/keyboards/griffin/griffin_top.png"
                fill={true}
                className="rounded-2xl object-cover"
              />
              <p className="absolute bottom-1 left-2 text-sm text-black">
                Courtesy of P3D
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative aspect-video">
              <Image
                alt="griffin profile"
                src="/images/keyboards/griffin/griffin_profile.png"
                fill={true}
                className="rounded-2xl object-cover"
              />
              <p className="absolute bottom-1 left-2 text-sm text-black">
                Courtesy of P3D
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="p-5 text-3xl">Griffin</h1>
        <div className="px-5 py-5 md:p-10">
          <h2 className="text-2xl">Overview</h2>
          <p className="pt-5">
            Griffin is the second in the Mythics series. The idea was to provide
            a highly customizable keyboard with a simple and unique
            construction. Griffin offers the unique aesthetic found in all
            Mythic series projects in a tried and true 60% layout.
          </p>
          <div className="flex flex-col items-center justify-between pt-10 md:flex-row md:space-x-10">
            <div className="flex flex-col md:w-1/2">
              <h2 className="text-2xl">Case Construction</h2>
              <p className="pt-5">
                Taking what was learned from Pegasus and refining every aspect,
                the case construction was simplified to a 3-piece construction
                that consists of the top, bottom and weight. By implementing the
                popular gummy o-ring plate mounting solution, the top piece acts
                as a sleeve for the bottom.
              </p>
              <p className="pt-5">
                Griffin also sports a cleaner and streamlined profile by
                lowering the front height to 16.8mm, resulting in an effective
                key height of 21.6mm. Typing angle is at a comfortable 6
                degrees.
              </p>
              <p className="pt-5">
                The weight is offered in brass and features an engraving of a
                regal Griffin.
              </p>
            </div>
            <ImageCard
              text="Griffin Components - Courtesy of P3D"
              img="/images/keyboards/griffin/griffin_components.jpeg"
            />
            {/* <div className="py-5 md:w-5/12">
              <img
                src="/images/keyboards/griffin/griffin_components.jpeg"
                alt="griffin components"
                width="750"
                height="500"
                className="object-fit rounded-xl"
              />
            </div> */}
          </div>
          <div>
            {" "}
            <h2 className="pt-10 text-2xl">PCB</h2>
            <p className="pt-5">
              This project comes bundled with the{" "}
              <Link
                href="https://github.com/dededecline/SST60"
                target="_blank"
                className="underline hover:decoration-emerald-400/80 hover:decoration-4"
              >
                SST60 PCB
              </Link>{" "}
              developed by Dededecline and OJ Designs, providing multi-layout
              and Tsangan bottom row support. However, Griffin is compatible
              with all common PCBs with gummy o-ring support such as the Bakenko
              or H60.
            </p>
            <p className="pt-5">
              USB-C connectivity is made possible with Unified S1 USB-C
              daughterboard providing ESD protection, overcurrent protection,
              overvoltage protection, shielding noise decoupling, and
              single-path grounding to chassis functionality.
            </p>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <h2 className="pb-5 pt-10 text-2xl">Specifications</h2>
              <KeyboardSpecTable
                layout="60%"
                mounting="Gummy O-Ring"
                angle="6 degrees"
                height="16.8mm"
                ekh="21.6 mm"
                caseMaterial="6063 Aluminium"
                weightMaterial="Brass"
              />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h2 className="pt-10 text-2xl">Timeline</h2>
              <p className="pt-5">
                Griffin is currently in Interest Check. More information to
                follow soon!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
