"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Bars3Icon,
  ChevronDoubleRightIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/solid";

type TEntry = {
  name: string;
  link: string;
  children?: TEntry[];
};

//Testing alternate array to create nav menu. See menu.tsx component for original array.
const navLinks = [
  { name: "About", link: "/about" },
  {
    name: "Keyboards",
    link: "/keyboards",
    children: [
      {
        name: "MB Series",
        link: "/keyboards/#mb",
        children: [
          { name: "MB-44", link: "/keyboards/mb44" },
          { name: "MB-LB", link: "/keyboards/mblb" },
          { name: "MB-TKL", link: "/keyboards/mbtkl" },
        ],
      },
      {
        name: "Mythics Series",
        link: "/keyboards/#mythics",
        children: [
          { name: "Pegasus", link: "/keyboards/pegasus" },
          { name: "Griffin", link: "/keyboards/griffin" },
        ],
      },
    ],
  },
  { name: "Resources", link: "/resources" },
  { name: "Contact", link: "/contact" },
];

export default function MenuLg() {
  const pathname = usePathname();
  console.log(pathname);

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
                  className="h-5 w-5 rounded-md border-2 border-green-500 bg-green-300 text-black hover:bg-green-400"
                >
                  {isExpanded ? (
                    <ChevronDoubleDownIcon className="scale-75" />
                  ) : (
                    <ChevronDoubleRightIcon className="scale-75" />
                  )}
                </button>
              )}
              <Link
                href={entry.link}
                scroll={false}
                className={`${
                  pathname === entry.link ? "bg-slate-600 text-white" : ""
                } ml-2 flex rounded-xl px-2 hover:bg-green-400 hover:text-black`}
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
                } ml-2 rounded-xl px-2 hover:bg-green-400 hover:text-black`}
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
      <div className="static m-1 mt-4 w-80 rounded-3xl border-emerald-700 bg-green-300">
        <div className="m-0 flex h-16 items-center rounded-3xl border-4 border-emerald-700 bg-green-300 text-green-950 duration-150">
          <Bars3Icon className="ml-4 mr-1 h-8 w-8"></Bars3Icon>
          <div className="flex w-52 justify-center">Menu</div>
        </div>

        <div className="relative flex flex-col items-center justify-center rounded-b-3xl bg-green-300 text-green-950">
          {navLinks.map((entry) => {
            return <Entry key={entry.name} entry={entry} level={0} />;
          })}
        </div>
      </div>
    </>
  );
}
