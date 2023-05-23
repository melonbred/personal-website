"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";

type MenuProps = {
  isHome: boolean;
  addTW?: string;
};

export default function MenuButton(props: MenuProps) {
  const [isClicked, setIsClicked] = useState(false);
  const menuArray = ["About", "Keyboards", "Resources", "Contact"];

  return (
    <div
      className={`${props.addTW ? props.addTW : ""} 
      ${
        props.isHome ? "" : "absolute right-3"
      } m-1 rounded-3xl border-emerald-700 bg-green-300`}
    >
      <button onClick={() => setIsClicked(!isClicked)}>
        <div
          className={`${isClicked ? "" : "hover:scale-105"}
          ${props.isHome ? "w-80" : "w-40 md:w-80"}
           m-0 flex h-16 items-center rounded-3xl border-4 border-emerald-700 bg-green-300 text-green-950 duration-150`}
        >
          <Bars3Icon className="ml-4 mr-2 h-8 w-8"></Bars3Icon>

          <div className="flex w-52 justify-center">Menu</div>
        </div>
      </button>

      <div
        className={`${
          isClicked
            ? "translate-y-0 transition-transform duration-200"
            : "-translate-y-20 scale-y-0"
        } 
        ${props.isHome ? "w-80" : "w-40 md:w-80"}
        relative flex flex-col items-center justify-center rounded-b-3xl bg-green-300 text-green-950`}
      >
        {isClicked &&
          menuArray.map((folder) => {
            return (
              <div
                key={folder}
                className="flex w-full justify-center p-1 transition duration-100 hover:scale-110 hover:underline"
              >
                <Link
                  onClick={() => setIsClicked(false)}
                  href={`/${folder.toLocaleLowerCase()}`}
                >
                  {folder}
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
