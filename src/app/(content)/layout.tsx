import "../globals.css";
import Image from "next/image";
import Link from "next/link";
import MenuButton from "@/components/menu";

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
      <aside className="hidden lg:sticky lg:top-0 lg:mr-2 lg:flex lg:h-full lg:w-[360px] lg:flex-col lg:items-center lg:overscroll-none lg:bg-slate-600 lg:p-5">
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
        <MenuButton isHome={false} addTailWind="mt-4 lg:static" />
      </aside>
      <div className="overflow-y-auto rounded-3xl lg:bg-slate-800">
        {children}
      </div>
    </div>
  );
}
