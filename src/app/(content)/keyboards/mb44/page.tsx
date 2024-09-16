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

export default function MB44() {
  return (
    <>
      <head>
        <title>MelonBred MB-44 40% Keyboard</title>
        <meta
          name="description"
          content="MB-44! A 40% mechanical keyboard by MelonBred, this is the first in the MB line of boards that offers a compact 40% layout and a fun 65%-esque blocker."
        />
        <meta
          name="keywords"
          content="mechanical, keyboard, 40%, melonbred, mb44, mb-44, small"
        />
        <meta
          property="description"
          content="MB-44! A 40% mechanical keyboard by MelonBred, this is the first in the MB line of boards that offers a compact 40% layout and a fun 65%-esque blocker."
        />
        <meta property="og:title" content="MB-44 Keyboard" />
        <meta property="og: image" content="<generated>" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="MelonBred 40% MB-44 Keyboard" />
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
                alt="mb44 keyboard top"
                src="/images/keyboards/mb44/mb44_top_kok.jpeg"
                fill={true}
                className="rounded-2xl object-cover"
              />
              <p className="absolute bottom-1 left-2 text-sm">
                Courtesy of{" "}
                <Link
                  href="https://www.instagram.com/kokaloo_/"
                  target="_blank"
                  className="underline hover:line-through hover:decoration-emerald-400/80 hover:decoration-4"
                >
                  Kokaloo
                </Link>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative aspect-video">
              <Image
                alt="mb44 keyboard bottom"
                src="/images/keyboards/mb44/mb44_btm_kok.jpeg"
                fill={true}
                className="rounded-2xl object-cover"
              />
              <p className="absolute bottom-1 left-2 text-sm">
                Courtesy of{" "}
                <Link
                  href="https://www.instagram.com/kokaloo_/"
                  target="_blank"
                  className="underline hover:line-through hover:decoration-emerald-400/80 hover:decoration-4"
                >
                  Kokaloo
                </Link>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex flex-col items-center pb-5">
        <h1 className="p-5 text-3xl xl:text-6xl">MB-44</h1>
        <div className="p-4 md:p-10 lg:px-20">
          <h2 className="text-2xl">Overview</h2>
          <p className="pt-2">
            MB-44 is the first project to be publically available and truely
            embodies the MB series. The MB-44 features a 12.75u layout with a
            0.5u blocker separating the spacebars from the arrow cluster similar
            to a typical 65% layout. This project was all about learning product
            development, prototyping and manufacturing and grew to become the
            foundation of all the projects that came after.
          </p>

          <div className="flex flex-col items-center justify-between pt-10 md:flex-row md:space-x-10">
            <ImageCard
              text="MB-44 Keyboard Layout"
              img="/images/keyboards/mb44/mb44_kle.jpg"
            />
            <div className="flex flex-col md:w-1/2">
              <h2 className="text-2xl">Case Construction</h2>
              <p className="py-2">
                The case is typical top mount construction with a top and bottom
                piece. This was the first keyboard project that I knew I wanted
                to have CNC machined of aluminum. As such, I wanted to
                experiment with different modeling tools. The top piece features
                a large 3.5-mm chamfer that wraps around the perimeter. The
                bottom piece mirros the large 3.5-mm chamfer around the
                perimeter, while also featuring a fun loft to create the
                7-degree typing angle.
              </p>
              <p className="py-2">
                This was my attempt at departuring from a typical rectangle
                keyboard, and I hope this accomplished some sort of
                individuality and sense of fun.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between pt-10 md:flex-row md:space-x-10">
            <div className="flex flex-col md:w-1/2">
              <h2 className="text-2xl">PCB</h2>
              <p className="py-2">
                The PCB is powered by an Atmel Atmega32u2-AU and features an
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
            <ImageCard
              text="MB-44 PCB Bottom"
              img="/images/keyboards/mb44/mb44_pcb_btm.png"
            />
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
