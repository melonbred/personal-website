"use client";

import { useEffect, useState, type ComponentProps } from "react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/app/swiper.css";

export { SwiperSlide };

const AUTOPLAY_DELAY_MS = 5000;

/**
 * Swiper carousel with the site's default controls that auto-advances through
 * its slides until the user pauses it with the play/pause button. Starts
 * paused for users who prefer reduced motion.
 */
export default function Carousel({
  children,
  ...props
}: ComponentProps<typeof Swiper>) {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setUserPaused(true);
    }
  }, []);

  useEffect(() => {
    if (!swiper || swiper.destroyed) return;
    if (!userPaused) {
      if (!swiper.autoplay.running) swiper.autoplay.start();
    } else if (swiper.autoplay.running) {
      swiper.autoplay.stop();
    }
  }, [swiper, userPaused]);

  return (
    <div className="relative">
      <Swiper
        centeredSlides={true}
        modules={[Autoplay, Navigation, Pagination, A11y]}
        navigation={true}
        pagination={{ clickable: true }}
        rewind={true}
        autoplay={{
          delay: AUTOPLAY_DELAY_MS,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSwiper={setSwiper}
        {...props}
      >
        {children}
      </Swiper>
      <button
        type="button"
        onClick={() => setUserPaused((p) => !p)}
        aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
        aria-pressed={userPaused}
        className="absolute bottom-1.5 right-2 z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 border-emerald-700 bg-green-300 text-emerald-900 transition duration-150 hover:bg-green-400"
      >
        {userPaused ? (
          <PlayIcon className="h-4 w-4" />
        ) : (
          <PauseIcon className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
