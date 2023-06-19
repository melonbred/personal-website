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
    <div className="inset-0 flex h-screen min-h-screen flex-col overflow-hidden bg-slate-600 p-2 lg:flex-row">
      <div className="relative z-10 flex w-screen items-center justify-between bg-slate-600 p-2 lg:hidden">
        <Link
          className="rounded-full border-4 border-emerald-700 bg-green-300 duration-150 hover:scale-105"
          href="/"
        >
          <Image
            alt="turtle"
            width="80"
            height="80"
            src="/images/misc/turtlepan.png"
          />
        </Link>
        <div className="fixed right-0 top-5">
          <MenuButton isHome={false} addTailWind="absolute right-3" />
        </div>
      </div>
      {/* persistent sidebar for large resolution */}
      <aside className="hidden lg:relative lg:top-0 lg:mr-2 lg:flex lg:h-full lg:flex-col lg:items-center lg:bg-slate-600 lg:p-5 ">
        <div className="overflow-x-hidden overflow-y-scroll">
          <div className="flex h-full w-[335px] flex-col items-center justify-between">
            <div className="my-2 flex w-full items-center justify-evenly">
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
      <div className="overflow-y-auto rounded-3xl bg-slate-800">{children}</div>
    </div>
  );
}
