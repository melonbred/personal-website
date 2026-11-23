"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import MenuMobile from "@/components/MenuMobile";

// Scroll thresholds with a gap between them (hysteresis) so the header
// doesn't flicker when the user hovers around a single cutoff.
const SHRINK_AFTER = 48;
const EXPAND_BEFORE = 8;

/**
 * Fixed frame for viewports below `lg`: a top bar (logo + menu) and a slate
 * border around a rounded content window. The page scrolls beneath it. Once
 * the user scrolls down, the top bar shrinks to reveal more content.
 */
export default function MobileFrame() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled((prev) =>
        prev ? y > EXPAND_BEFORE : y > SHRINK_AFTER
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      data-scrolled={scrolled}
      className="group/frame lg:hidden"
      style={
        {
          "--frame-top": scrolled ? "4.5rem" : "6.5rem",
        } as React.CSSProperties
      }
    >
      {/* Rounded window cut out of a slate border via a large box-shadow.
          pointer-events-none so taps and scrolling pass through. */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-2 bottom-2 top-[--frame-top] z-30 rounded-3xl shadow-[0_0_0_100vmax_theme(colors.slate.600)] transition-[top] duration-200 ease-out motion-reduce:transition-none"
      />
      {/* Solid strip over the bottom border band. Visually redundant, but
          Safari (iOS 26) tints the area under its floating toolbar from the
          background of fixed elements at the viewport edge; a box-shadow
          isn't sampled. */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 bottom-0 z-40 h-2 bg-slate-600"
      />
      <header className="fixed inset-x-0 top-0 z-40 flex h-[--frame-top] items-center justify-between bg-slate-600 p-2 transition-[height] duration-200 ease-out motion-reduce:transition-none">
        <Link
          className="rounded-full border-4 border-emerald-700 bg-green-300 duration-150 hover:scale-105"
          href="/"
        >
          <Image
            alt="turtle"
            width="80"
            height="80"
            src="/images/misc/turtlepan.png"
            className="h-20 w-20 transition-[width,height] duration-200 ease-out group-data-[scrolled=true]/frame:h-12 group-data-[scrolled=true]/frame:w-12 motion-reduce:transition-none"
          />
        </Link>
        <MenuMobile
          className="pr-1"
          triggerClassName="transition-all duration-200 ease-out group-data-[scrolled=true]/frame:h-12 group-data-[scrolled=true]/frame:rounded-2xl group-data-[scrolled=true]/frame:text-sm group-data-[scrolled=true]/frame:[&_svg]:h-6 group-data-[scrolled=true]/frame:[&_svg]:w-6 motion-reduce:transition-none"
        />
      </header>
    </div>
  );
}
