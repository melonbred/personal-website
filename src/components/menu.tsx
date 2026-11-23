"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { navLinks } from "./MenuLg";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const menuArray = ["About", "Keyboards", "Resources", "Contact"];

type MenuProps = {
  isHome: boolean;
  addTailWind?: string;
};

type TEntry = {
  name: string;
  link: string;
  children?: TEntry[];
};

const linkClass =
  "ml-2 flex rounded-xl px-2 transition duration-150 hover:scale-110 hover:bg-green-400 hover:text-black";

// Defined outside MenuButton so React keeps each entry mounted across
// renders; otherwise the expand/collapse animation would be cut off.
function Entry({
  entry,
  level,
  pathname,
  onNavigate,
  forceOpen,
}: {
  entry: TEntry;
  level: number;
  pathname: string;
  onNavigate: () => void;
  /** Keep this section (and its sub-sections) expanded, e.g. at lg and up. */
  forceOpen: boolean;
}) {
  const [open, setOpen] = useState(false);
  const activeClass = pathname === entry.link ? "bg-slate-600 text-white" : "";
  const row = (
    // Only top-level rows set the width. Nested rows stretch to fill their
    // (indented) container, so expanding a section never makes the entry
    // wider, which would re-center it and shift the menu sideways.
    <div
      style={{ paddingLeft: `${10 * level}px` }}
      className={`m-1 flex rounded-3xl ${level === 0 ? "w-52" : ""}`}
    >
      <div className="flex items-center">
        {entry.children ? (
          // Same height animation as the shadcn sidebar's sections; the
          // chevron rotates to point down while open. At lg and up every
          // section is forced open, so the toggle is inert there.
          <CollapsibleTrigger
            aria-label={`Toggle ${entry.name}`}
            className="h-5 w-5 rounded-md border-2 border-emerald-700 bg-green-300 text-black transition duration-150 max-lg:hover:scale-125 max-lg:hover:bg-green-400 lg:pointer-events-none lg:cursor-default [&[data-panel-open]>svg]:rotate-90"
          >
            <ChevronDoubleRightIcon className="scale-75 transition-transform duration-200" />
          </CollapsibleTrigger>
        ) : (
          <div className="h-5 w-5"></div>
        )}
        <Link
          onClick={onNavigate}
          href={entry.link}
          scroll={entry.children ? false : undefined}
          className={`${activeClass} ${linkClass}`}
        >
          {entry.name}
        </Link>
      </div>
    </div>
  );

  if (!entry.children) {
    return <div className="flex flex-col">{row}</div>;
  }

  return (
    <Collapsible
      className="flex flex-col"
      open={forceOpen || open}
      onOpenChange={setOpen}
    >
      {row}
      <CollapsibleContent>
        {/* The vertical guide line is a left border on a full-width box, so
            the panel's overflow clipping (needed for the animation) doesn't
            cut off nested entries. */}
        <div
          style={{ marginLeft: `${13 + 10 * level}px` }}
          className="border-l-2 border-emerald-700"
        >
          {entry.children.map((child) => (
            <Entry
              key={child.name}
              entry={child}
              level={level + 1}
              pathname={pathname}
              onNavigate={onNavigate}
              forceOpen={forceOpen}
            />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

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

  // lg and up: every section is expanded. The server renders this desktop
  // state; on phones it collapses on hydration, while the list is still
  // hidden behind the Menu button, so there's no visible flash.
  const isDesktop = !useIsMobile();

  return (
    <>
      <div
        ref={menuRef}
        className={`${props.addTailWind ? props.addTailWind : ""} 
      ${
        props.isHome ? "" : "absolute right-3"
      } m-1 rounded-3xl border-emerald-700 bg-green-300`}
      >
        {/* At lg and up the menu is always expanded, so the button does
            nothing there and drops its hover effect. */}
        <button
          type="button"
          aria-expanded={isOpen}
          className="lg:pointer-events-none lg:cursor-default"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${
              isOpen ? "" : "max-lg:hover:scale-105 max-lg:hover:bg-green-400"
            }
          ${props.isHome ? "w-72" : "w-64 md:w-72"}
           m-0 flex h-16 items-center rounded-3xl border-4 border-emerald-700 bg-green-300 text-green-950 duration-150`}
          >
            <Bars3Icon className="relative left-4 h-8 w-8"></Bars3Icon>

            <div className="flex w-full justify-center pr-8">Menu</div>
          </div>
        </button>

        {/* Below lg the list is collapsed until the button opens it; at lg
            and up it is always shown. Done in CSS so the server-rendered
            page is already in the right state for each screen size. */}
        <div
          className={`${
            isOpen
              ? "flex origin-top max-lg:animate-menu-open"
              : "hidden lg:flex"
          }
        ${props.isHome ? "w-72" : "w-64 md:w-72"}
        relative flex-col items-center justify-center rounded-b-3xl bg-green-300 text-green-950`}
        >
          {navLinks.map((entry) => (
            <Entry
              key={entry.name}
              entry={entry}
              level={0}
              pathname={pathname}
              onNavigate={() => setIsOpen(false)}
              forceOpen={isDesktop}
            />
          ))}
        </div>
      </div>
    </>
  );
}
