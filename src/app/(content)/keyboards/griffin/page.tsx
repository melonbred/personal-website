"use client";

import Image from "next/image";

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "@/app/swiper.css";
import "swiper/css/pagination";

export default function Griffin() {
  return (
    <>
      <div className="h-24 lg:hidden"></div>
      <div className="p-3">
        <Swiper
          centeredSlides={true}
          modules={[Navigation, Pagination, A11y]}
          navigation={true}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="relative h-60 md:h-[500px] lg:h-[650px]">
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
            <div className="relative h-60 md:h-[500px] lg:h-[650px]">
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
            <div className="relative h-60 md:h-[500px] lg:h-[650px]">
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
      <div className="flex flex-col items-center pb-5">
        <h1 className="pt-4 text-3xl">Griffin</h1>
        <div className="p-4 md:p-10">
          <h2 className="pt-5 text-2xl">Overview</h2>
          <p className="pt-5">
            Griffin is the second in the Mythics series. The idea was to provide
            a highly customizable keyboard with a simple and unique
            construction. Griffin offers the unique aesthetic found in all
            Mythic series projects in a tried and true 60% layout.
          </p>
          <div className="flex flex-col pt-10 md:flex-row ">
            <div className="pr-5">
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
            <img
              src="/images/keyboards/griffin/griffin_components.jpeg"
              alt="griffin components"
              width="500"
              height="200"
              className="pt-5"
            />
          </div>
          <div>
            {" "}
            <h2 className="pt-10 text-2xl">PCB</h2>
            <p className="pt-5">
              This project comes bundled with the{" "}
              <a
                href="https://github.com/dededecline/SST60"
                target="_blank"
                className="underline hover:decoration-emerald-400/80 hover:decoration-4"
              >
                SST60 PCB
              </a>{" "}
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
              <div className="relative overflow-x-auto rounded-xl">
                <table className="w-full">
                  <tbody>
                    <tr className="bg-slate-600">
                      <th scope="row" className="px-5 py-3 text-left uppercase">
                        Layout
                      </th>
                      <td>60%</td>
                    </tr>
                    <tr className="bg-slate-500">
                      <th scope="row" className="px-5 py-3 text-left uppercase">
                        Plate Mounting
                      </th>
                      <td>Gummy O-Ring</td>
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
                      <td>16.8 mm</td>
                    </tr>
                    <tr className="bg-slate-600">
                      <th scope="row" className="px-5 py-3 text-left uppercase">
                        Effective Key Height
                      </th>
                      <td>21.6 mm</td>
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
                      <td>Brass</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h2 className="pt-10 text-2xl">Timeline</h2>
              <p className="pt-5">
                P3D Store is the worldwide vendor for Griffin.{" "}
              </p>
              <ul className="ml-4 list-disc">
                <li className="pt-5">
                  Group buy is to run from July 1st through August 1st, 2023.
                </li>
                {/* <li className="pt-5">
                  Group buy was fulfilled on January 1st, 2023.
                </li>
                <li className="pt-5">Extras sold on January 25th, 2023.</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
