"use client";

import { useEffect, useRef, useState, type ComponentProps } from "react";
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

// Countdown ring geometry (SVG units; the viewBox matches the 28px button).
const RING_RADIUS = 12.5;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

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
    } else {
      if (swiper.autoplay.running) swiper.autoplay.stop();
      setRing(1);
    }
  }, [swiper, userPaused]);

  // The ring empties clockwise from 12 o'clock, like a clock hand, as the time
  // to the next slide runs out (a negative offset trims the arc from its
  // starting end). It's updated
  // directly on the DOM node to avoid a React render every animation frame.
  const ringRef = useRef<SVGCircleElement>(null);
  function setRing(fractionLeft: number) {
    ringRef.current?.setAttribute(
      "stroke-dashoffset",
      String(-RING_CIRCUMFERENCE * (1 - Math.min(1, Math.max(0, fractionLeft))))
    );
  }

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
        onAutoplayTimeLeft={(_, __, fractionLeft) => setRing(fractionLeft)}
        {...props}
      >
        {children}
      </Swiper>
      <button
        type="button"
        onClick={() => setUserPaused((p) => !p)}
        aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
        aria-pressed={userPaused}
        className="absolute bottom-1.5 right-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-green-300 text-emerald-900 transition-colors duration-150 hover:bg-green-400"
      >
        <svg
          viewBox="0 0 28 28"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full -rotate-90"
        >
          <circle
            cx="14"
            cy="14"
            r={RING_RADIUS}
            fill="none"
            strokeWidth="3"
            className="stroke-emerald-700/30"
          />
          <circle
            ref={ringRef}
            cx="14"
            cy="14"
            r={RING_RADIUS}
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={RING_CIRCUMFERENCE}
            strokeDashoffset={0}
            className="stroke-emerald-700"
          />
        </svg>
        {userPaused ? (
          <PlayIcon className="h-4 w-4" />
        ) : (
          <PauseIcon className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
