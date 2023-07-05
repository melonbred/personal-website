"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bars3Icon,
  ChevronDoubleRightIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/solid";
import { navLinks } from "./MenuLg";

export const menuArray = ["About", "Keyboards", "Resources", "Contact"];

type MenuProps = {
  isHome: boolean;
  addTailWind?: string;
};

export default function MenuButton(props: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // console.log(`The menu is open: ${isOpen}`);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
        // console.log("Click off menu button. The menu is closed");
      }
    };

    document.body.addEventListener("click", handleClick);

    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  const pathname = usePathname();
  console.log(pathname);

  type TEntry = {
    name: string;
    link: string;
    children?: TEntry[];
  };

  function Entry({ entry, level }: { entry: TEntry; level: number }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
      <div className={`flex flex-col `}>
        <div
          style={{ paddingLeft: `${30 * level}px` }}
          className={`m-1 flex w-52 rounded-3xl transition duration-100`}
        >
          {entry.children ? (
            <div className="flex items-center">
              {entry.children && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="h-5 w-5 rounded-md border-2 border-emerald-700 bg-green-300 text-black transition duration-150 hover:scale-125 hover:bg-green-400"
                >
                  {isExpanded ? (
                    <ChevronDoubleDownIcon className="scale-75" />
                  ) : (
                    <ChevronDoubleRightIcon className="scale-75" />
                  )}
                </button>
              )}
              <Link
                onClick={() => setIsExpanded(!isExpanded)}
                href={entry.link}
                scroll={false}
                className={`${
                  pathname === entry.link ? "bg-slate-600 text-white" : ""
                } ml-2 flex rounded-xl px-2 transition duration-150 hover:scale-110 hover:bg-green-400 hover:text-black`}
              >
                {isExpanded ? <div>{entry.name}</div> : <div>{entry.name}</div>}
              </Link>
            </div>
          ) : (
            <div className="flex items-center">
              <div className="h-5 w-5"></div>
              <Link
                href={entry.link}
                className={`${
                  pathname === entry.link ? "bg-slate-600 text-white" : ""
                } ml-2 rounded-xl px-2 transition duration-150 hover:scale-110 hover:bg-green-400 hover:text-black`}
              >
                {entry.name}
              </Link>
            </div>
          )}
        </div>
        {isExpanded && (
          <div>
            {entry.children?.map((entry: TEntry) => (
              <Entry key={entry.name} entry={entry} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <div
        ref={menuRef}
        className={`${props.addTailWind ? props.addTailWind : ""} 
      ${
        props.isHome ? "" : "absolute right-3"
      } m-1 rounded-3xl border-emerald-700 bg-green-300`}
      >
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            console.log("Button Clicked");
          }}
        >
          <div
            className={`${isOpen ? "" : "hover:scale-105 hover:bg-green-400"}
          ${props.isHome ? "w-80" : "w-64 md:w-80"}
           m-0 flex h-16 items-center rounded-3xl border-4 border-emerald-700 bg-green-300 text-green-950 duration-150`}
          >
            <Bars3Icon className="relative left-4 h-8 w-8"></Bars3Icon>

            <div className="flex w-full justify-center pr-8">Menu</div>
          </div>
        </button>

        <div
          className={`${
            isOpen
              ? "translate-y-0 transition-transform duration-200"
              : "-translate-y-20 scale-y-0"
          } 
        ${props.isHome ? "w-80" : "w-64 md:w-80"}
        relative flex flex-col items-center justify-center rounded-b-3xl bg-green-300 text-green-950`}
        >
          {isOpen &&
            navLinks.map((entry) => {
              return <Entry key={entry.name} entry={entry} level={0} />;
            })}
        </div>
      </div>
    </>
  );
}
