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

export default function MBTKL() {
  return (
    <>
      <head>
        <title>MelonBred - MB-TKL - 40% Keyboard</title>
        <meta
          name="description"
          content="MB-TKL! A 40% TenKeyLess style mechanical keyboard by MelonBred, MB-TKL offers a unique TKL experience with a split 40% core layout."
        />
        <meta
          name="keywords"
          content="mechanical, keyboard, 40%, melonbred, mbtkl, mb-tkl, small, TKL"
        />
        <meta
          property="og:description"
          content="MB-TKL! A 40% TenKeyLess style mechanical keyboard by MelonBred, MB-TKL offers a unique TKL experience with a split 40% core layout."
        />
        <meta property="og:title" content="MelonBred Keyboards - MB-TKL" />
        <meta property="og: image" content="<generated>" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="MelonBred 40% MB-TKL Keyboard" />
      </head>

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
                alt="mbtkl keyboard top"
                src="/images/keyboards/mbtkl/mbtkl_blockers.png"
                fill={true}
                className="rounded-2xl object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative aspect-video">
              <Image
                alt="mbtkl keyboard side profile"
                src="/images/keyboards/mbtkl/mbtkl_side.png"
                fill={true}
                className="rounded-2xl object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative aspect-video">
              <Image
                alt="mbtkl keyboard bottom"
                src="/images/keyboards/mbtkl/mbtkl_btm.png"
                fill={true}
                className="rounded-2xl object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex flex-col items-center pb-5">
        <h1 className="p-5 text-3xl xl:text-6xl">MB-TKL</h1>
        <div className="p-4 md:p-10 lg:px-20">
          <h2 className="text-2xl">Overview</h2>
          <p className="pt-2">
            MB-TKL started as nothing more than an exercise in layout
            experimenation. The goal was to have a 12.75u layout as the main
            cluster, all 12 F-keys and TKL style navigation and arrow keys. As
            the layout evolved through several iterations, the idea of creating
            a case around it became more appealing, and thus MB-TKL was born.
          </p>

          <div className="flex flex-col items-center justify-between pt-10 md:flex-row md:space-x-10">
            <ImageCard
              text="MB-TKL Keyboard Layout"
              img="/images/keyboards/mbtkl/mbtkl_layout.png"
            />
            <div className="flex flex-col md:w-1/2">
              <h2 className="text-2xl">The Layout</h2>
              <p className="py-2">
                Let&apos;s get it out of the way. This layout is a bit funky.
              </p>
              <p className="py-2">
                The three key essentials for this layout is a 12.75u main
                cluster, all twelve F-keys and TKL style navigation and arrow
                keys. TKL navigation and arrow keys are easy. The challenge is
                having the F-keys, three clusters of four keys, separated evenly
                within the confines of the 12.75u layout. The 12 F-keys can
                easily be laid out in three clusters with 0.375u blockers
                in-between. However, this results in an ortholinear-like layout
                with the first cluster of four; not my preferred aesthetic. The
                split in the alphas entirely serves to alleviate this issue, but
                has the added benefit of providing some ergonomics. Offsetting
                the F-keys provided the opportunity to add a fun light bar. Tack
                on navigation and arrows keys, and call it a day!
              </p>
              <p className="py-2">
                The left 3U spacebar can be split into 2U + 1U or 1U + 2U
                configurations. There is also an option for win key (WK) or
                win-keyless (WKL) which will include a blocker on the case.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between pt-10 md:flex-row md:space-x-10">
            <div className="flex flex-col md:w-1/2">
              <h2 className="text-2xl">Case Construction</h2>
              <p className="py-2">
                The case is a typical three piece construction that consists of
                an aluminimum top and bottom and brass weight. MB-TKL features
                the use of a plate that is top mounted.
              </p>
              <p className="py-2">
                While the case is intended to be simple, the side profile
                features a simple compound curve with filleted edges. Adding to
                the playfulness of the side profile, a diffuser is also included
                to soften and dispears the LEDs on the top left.
              </p>
              <p className="py-2">
                The brass weight&pos;s exterior appearance is that of a simple
                accent piece, recessed to avoid damage while resting on a desk.
                Inside the case, the soft brass material encompasses the
                majority of the interior surface area in an effort to absorb
                some vibrations.
              </p>
              <p className="py-2"></p>
            </div>
            <ImageCard
              text="MB-TKL Case from Factory"
              img="/images/keyboards/mbtkl/mbtkl_case.png"
            />
          </div>

          <div className="flex flex-col items-center justify-between pt-10 md:flex-row md:space-x-10">
            <ImageCard
              text="MB-TKL PCB Bottom"
              img="/images/keyboards/mbtkl/mbtkl_pcb.png"
            />
            <div className="flex flex-col md:w-1/2">
              <h2 className="text-2xl">PCB</h2>
              <p className="py-2">
                The PCB is powered by an Atmel Atmega32u4-AU and features an RGB
                LED light bar, and split spacebar layouts as shown in the Layout
                section above. The PCB also includes breakout pins for debugging
                purposes. This PCB is a very simply design that incorporates ESD
                and oversurge protection.
              </p>
              <p className="py-2">
                Other features such as rotary encoder support has been
                considered, but have not been implemented due to my own personal
                use case.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <h2 className="pb-5 pt-10 text-2xl">Specifications</h2>
              <KeyboardSpecTable
                layout="40% TKL - 12.75u main cluster"
                mounting="Top Mount"
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
                Two rounds of prototyping were produced in November 2022 and
                March 2023 to validate the case and PCB. The project has
                concluded with no plans for a larger sale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
