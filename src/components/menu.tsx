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
      className={`${
        props.addTW ? props.addTW : ""
      } bg-green-300 border-1 border-emerald-700 rounded-3xl m-1`}
    >
      <button onClick={() => setIsClicked(!isClicked)}>
        <div
          className={`${isClicked ? "" : "hover:scale-105"}
          ${props.isHome ? "w-80" : "w-40 md:w-80"}
           bg-green-300 border-2 border-emerald-700 text-green-950 rounded-3xl h-16 flex items-center m-0 transition-opacity duration-150`}
        >
          <Bars3Icon className="h-8 w-8 ml-4 mr-2"></Bars3Icon>

          <div className="flex w-52 justify-center">Menu</div>
        </div>
      </button>

      <div
        className={`${
          isClicked
            ? "transition-transform duration-200 translate-y-0"
            : "-translate-y-20 scale-y-0"
        } 
        ${props.isHome ? "w-80" : "w-40 md:w-80"}
        flex flex-col justify-center items-center bg-green-300 text-green-950 rounded-b-3xl relative`}
      >
        {isClicked &&
          menuArray.map((folder) => {
            return (
              <div
                key={folder}
                className="w-full flex justify-center p-1 hover:scale-110"
              >
                <Link href={`/${folder.toLocaleLowerCase()}`}>{folder}</Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
