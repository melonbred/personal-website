import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

import {
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/solid";

type ImageCardProps = {
  text: string;
  img: string;
};

export default function ImageCard({ text, img }: ImageCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
    // console.log("isExpanded set to true");
  };

  const escFunction = useCallback((e: any) => {
    if (e.key === "Escape") {
      setIsExpanded(false);
      // console.log("esc key pressed. isExpanded set to false.");
    }
  }, []);

  const backgroundRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: any) => {
    if (backgroundRef.current && !backgroundRef.current.contains(e.target)) {
      setIsExpanded(false);
      // console.log("handleOutsideClick tiggered");
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    document.body.addEventListener("click", handleOutsideClick, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
      document.removeEventListener("click", handleOutsideClick, false);
    };
  }, []);

  return (
    <div className="my-4 w-11/12 rounded-3xl bg-slate-600 sm:w-96 md:w-2/3 lg:w-1/2 xl:w-2/5">
      <div className="relative flex aspect-[3/2] w-full flex-col overflow-hidden rounded-3xl border-4 border-slate-400 object-cover">
        <Image alt={text} src={img} fill={true} className="object-cover" />
        <button
          className="absolute bottom-4 left-4 h-10 w-10 rounded-lg border-2 border-emerald-700 bg-green-300 text-emerald-900 hover:bg-green-400 lg:h-12 lg:w-12 lg:border-4"
          onClick={handleExpandClick}
        >
          <ArrowsPointingOutIcon className="scale-75 " />
        </button>
      </div>
      <div className="p-2">
        <p className="pr-2 text-right text-sm">{text}</p>
      </div>
      <div className={`${isExpanded ? "block" : "hidden"}`}>
        <div className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center backdrop-blur-md">
          <div className="flex h-full w-full items-center justify-center">
            <div
              ref={backgroundRef}
              className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl border-4 border-slate-400 md:w-[90%] lg:w-[70%]"
            >
              <Image
                alt={text}
                src={img}
                fill={true}
                className="object-cover"
              />
            </div>
            <button
              className="z-12 absolute right-5 top-5 h-10 w-10 rounded-lg border-2 border-emerald-700 bg-green-300 text-emerald-900 hover:bg-green-400 lg:h-12 lg:w-12 lg:border-4"
              onClick={handleOutsideClick}
            >
              <ArrowsPointingInIcon className="scale-75 text-emerald-900" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
