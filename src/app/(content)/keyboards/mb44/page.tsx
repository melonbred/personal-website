"use client";

import Image from "next/image";
import ImageCard from "@/components/ImageCard";

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "@/app/swiper.css";
import "swiper/css/pagination";

export default function MB44() {
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
                alt="mb44 top"
                src="/images/keyboards/mb44/mb44_top_kok.jpeg"
                fill={true}
                className="rounded-2xl object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative aspect-video">
              <Image
                alt="mb44 btm"
                src="/images/keyboards/mb44/mb44_btm_kok.jpeg"
                fill={true}
                className="rounded-2xl object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex flex-col items-center pb-5">
        <h1 className="pt-4 text-3xl">MB-44</h1>
        <div className="p-4 md:p-10">
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
            <div className="flex flex-col md:w-1/2">
              <h2 className="text-2xl">Case Construction</h2>
              <p className="py-2">
                The 4-piece construction includes components typical of many
                keyboards: top, bottom, switch plate and weight. However, what
                is unique about Pegasus is the plate mounting solution. The
                switch plate is a half plate that is integrated into the raised
                bezel component of the keyboard. This component is then
                sandwiched between the case and bottom components, isolated by
                open-cell foam strips. The idea was to provide a soft, flexible
                typing experience in the alphas while offering a stable platform
                in the modifiers for tap-hold functions.
              </p>
              <p className="py-2">
                The weight featured an engraving of a Pegasus and was offered in
                raw brass and polished stainless steel.
              </p>
            </div>
            <ImageCard
              text="Pegasus Schematic"
              img="/images/keyboards/pegasus/pegasus_schematic.png"
            />
            {/* <div className="py-5 md:w-5/12">
              <img
                alt="pegasus schematic"
                src="/images/keyboards/pegasus/pegasus_schematic.png"
                width="750"
                height="500"
                className="object-fit rounded-xl"
              />
            </div> */}
          </div>

          <h2 className="pt-10 text-2xl">PCB</h2>
          <p className="py-2">
            The PCB is powered by an Atmel Atmega32u4-MU and features a cut
            across the middle to provide flexibility in the alpha cluster.
            Rotary encoder support is also provided in two independent
            locations.
          </p>
          <p className="py-2">
            The mainboard PCB is connected to a C3 Unified Daughterboard via a
            4-pin JST cable to provide ESD, oversurge protection, shield noise
            decoupling, and single-path grounding to chasis functionality.
          </p>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <h2 className="pb-5 pt-10 text-2xl">Specifications</h2>
              <div className="relative overflow-x-auto rounded-xl">
                <table className="w-full">
                  <tbody>
                    <tr className="bg-slate-600">
                      <th scope="row" className="px-5 py-3 text-left uppercase">
                        Layout
                      </th>
                      <td>40% WKL</td>
                    </tr>
                    <tr className="bg-slate-500">
                      <th scope="row" className="px-5 py-3 text-left uppercase">
                        Plate Mounting
                      </th>
                      <td>Gasket Mounted Integrated Half-Plate</td>
                    </tr>
                    <tr className="bg-slate-600">
                      <th scope="row" className="px-5 py-3 text-left uppercase">
                        Typing Angle
                      </th>
                      <td>6 degrees</td>
                    </tr>
                    <tr className="bg-slate-500">
                      <th scope="row" className="px-5 py-3 text-left uppercase">
                        Front Height
                      </th>
                      <td>20 mm</td>
                    </tr>
                    <tr className="bg-slate-600">
                      <th scope="row" className="px-5 py-3 text-left uppercase">
                        Effective Key Height
                      </th>
                      <td>24.2 mm</td>
                    </tr>
                    <tr className="bg-slate-500">
                      <th scope="row" className="px-5 py-3 text-left uppercase">
                        Case Material
                      </th>
                      <td>6063 Aluminium</td>
                    </tr>
                    <tr className="bg-slate-600">
                      <th scope="row" className="px-5 py-3 text-left uppercase">
                        Weight Material
                      </th>
                      <td>Brass or Polished Stainless Steel</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h2 className="pt-10 text-2xl">Timeline</h2>
              <p className="pt-5">
                P3D Store was the worldwide vendor for Pegasus.{" "}
              </p>
              <ul className="ml-4 list-disc">
                <li className="pt-5">
                  Group buy was from May 21st through July 1st, 2022.
                </li>
                <li className="pt-5">
                  Group buy was fulfilled on January 1st, 2023.
                </li>
                <li className="pt-5">Extras sold on January 25th, 2023.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
