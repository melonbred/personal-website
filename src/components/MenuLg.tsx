"use client";

import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { menuArray } from "./menu";

export default function MenuLg() {
  return (
    <>
      <div className="static m-1 mt-4 w-80 rounded-3xl border-emerald-700 bg-green-300">
        <div className="m-0 flex h-16 items-center rounded-3xl border-4 border-emerald-700 bg-green-300 text-green-950 duration-150">
          <Bars3Icon className="ml-4 mr-1 h-8 w-8"></Bars3Icon>
          <div className="flex w-52 justify-center">Menu</div>
        </div>

        <div className="relative flex flex-col items-center justify-center rounded-b-3xl bg-green-300 text-green-950">
          {menuArray.map((folder) => {
            return (
              <div
                key={folder}
                className="m-1 flex w-32 justify-center rounded-3xl transition duration-100 hover:scale-110 hover:bg-green-400"
              >
                <Link href={`/${folder.toLocaleLowerCase()}`}>{folder}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
