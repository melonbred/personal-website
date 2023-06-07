import "../globals.css";
import Image from "next/image";
import Link from "next/link";
import MenuButton from "@/components/menu";
import MenuLg from "@/components/MenuLg";
import ExternalLinks from "@/components/ExternalLinks";

export const metadata = {
  title: "MelonBred Keyboards",
  description: "MelonBred personal website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-800 lg:flex lg:h-screen lg:overflow-hidden lg:bg-slate-600 lg:p-2">
      <div className="fixed left-3 right-3 top-0 z-10 flex items-start justify-between backdrop-blur lg:hidden">
        <Link
          className="mt-2 rounded-full border-4 border-emerald-700 bg-green-300 duration-150 hover:scale-105"
          href="/"
        >
          <Image
            alt="turtle"
            width="80"
            height="80"
            src="/images/misc/turtlepan.png"
          />
        </Link>
        <MenuButton isHome={false} addTailWind="mt-4 absolute right-3" />
      </div>
      <aside className="hidden lg:relative lg:top-0 lg:mr-2 lg:flex lg:h-full lg:flex-col lg:items-center lg:bg-slate-600 lg:p-5 ">
        <div className="overflow-x-hidden overflow-y-scroll">
          <div className="flex h-full flex-col justify-between">
            <div className="flex items-center">
              <Link
                className="rounded-full border-4 border-emerald-700 bg-green-300 duration-150 hover:scale-105 hover:bg-green-400"
                href="/"
              >
                <Image
                  alt="turtle"
                  width="80"
                  height="80"
                  src="/images/misc/turtlepan.png"
                />
              </Link>
              <div className="flex flex-col justify-start p-2">
                <h1>Welcome!</h1>
                <p>This is melonbred.dev.</p>
              </div>
            </div>
            <div className="mt-10"></div>
            <MenuLg />
            <div className="mt-10"></div>
            <ExternalLinks />
          </div>
        </div>
      </aside>
      <div className="overflow-y-auto rounded-3xl lg:bg-slate-800">
        {children}
      </div>
    </div>
  );
}
