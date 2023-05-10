"use client";

import Image from "next/image";
import { useState } from "react";

type MenuProps = {
  folders: string[];
};

export default function MenuButton(props: MenuProps) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="bg-green-300 border-1 border-emerald-700 rounded-3xl">
      <button onClick={() => setIsClicked(!isClicked)}>
        <div
          className={`${
            isClicked ? "" : "hover:scale-105"
          } bg-green-300 border-2 border-emerald-700 text-green-950 rounded-3xl w-80 h-16 flex items-center m-0 transition duration-150`}
        >
          <div className="pl-4 pr-2">
            <Image
              alt={"Menu"}
              height={30}
              width={30}
              src={"/iconmonstr-instagram-11.svg"}
            />
          </div>
          <div className="flex w-52 justify-center font-mono tracking-tighter">
            Menu
          </div>
        </div>
      </button>

      <div className="flex flex-col justify-center items-center bg-green-300 text-green-950 w-80 rounded-b-3xl">
        {isClicked &&
          props.folders.map((folders) => {
            return <div className="hover:scale-110">{folders}</div>;
          })}
      </div>
    </div>
  );
}
