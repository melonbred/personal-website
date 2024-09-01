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
                src="/images/keyboards/mbtkl/mbtkl_top.png"
                fill={true}
                className="rounded-2xl object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative aspect-video">
              <Image
                alt="mbtkl keyboard side"
                src="/images/keyboards/mbtkl/mbtkl_side.png"
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
              text="MB-44 Keyboard Layout"
              img="/images/keyboards/mb44/mb44_kle.jpg"
            />
            <div className="flex flex-col md:w-1/2">
              <h2 className="text-2xl">The Layout</h2>
              <p className="py-2">
                Let's get it out of the way. This layout is a bit funky.
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
                has the added benefit of separating your hands to provide some
                added ergonomics. Offsetting the F-keys provided the opportunity
                to add a fun light bar. Tack on navigation and arrows keys, and
                call it a day!
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
                features a compound curve with filleted edges to break away from
                the standard rectangle on a wedge. Adding to the playfulness of
                the side profile, a diffuser is also included to soften and
                disperse the LEDs on the top left.
              </p>
              <p className="py-2">
                The brass weight's exterior appearance is that of a simple
                accent piece, recessed to avoid damage while resting on a desk.
                Inside the case, the soft brass material encompasses the
                majority of the interior surface area in an effort to absorb
                some vibrations from keystrokes.
              </p>
              <p className="py-2"></p>
            </div>
            <ImageCard
              text="MB-44 Keyboard Layout"
              img="/images/keyboards/mb44/mb44_kle.jpg"
            />
          </div>

          <div className="flex flex-col items-center justify-between pt-10 md:flex-row md:space-x-10">
            <ImageCard
              text="MB-44 PCB Bottom"
              img="/images/keyboards/mb44/mb44_pcb_btm.png"
            />
            <div className="flex flex-col md:w-1/2">
              <h2 className="text-2xl">PCB</h2>
              <p className="py-2">
                The PCB is powered by an Atmel Atmega32u4-AU and features an
                assortment of bottom row options that support big spacebar
                (6.26u) and split spacebar layouts. A large driver for this
                layout was to incorporate 2x 3u split space layout since it was
                not very common at its time. Rotary encoder support is also
                provided in two independent locations.
              </p>
              <p className="py-2">
                The mainboard PCB is connected to a C3 Unified Daughterboard via
                a 4-pin JST cable to provide ESD, oversurge protection, shield
                noise decoupling, and single-path grounding to chasis
                functionality.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <h2 className="pb-5 pt-10 text-2xl">Specifications</h2>
              <KeyboardSpecTable
                layout="40% - 12.75u"
                mounting="Top Mount"
                angle="7 degrees"
                height="22.3 mm"
                ekh="26.4 mm"
                caseMaterial="6063 Aluminium"
                weightMaterial="N/A"
              />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h2 className="pt-10 text-2xl">Timeline</h2>
              <p className="pt-5">
                Aeternus was the worldwide vendor for MB-44.{" "}
              </p>
              <ul className="ml-4 list-disc">
                <li className="pt-5">
                  Group buy was from April 9th through April 30th, 2021.
                </li>
                <li className="pt-5">
                  Group buy was fulfilled on October 19th, 2021.
                </li>
                <li className="pt-5">Extras sold on November 19th, 2021.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
