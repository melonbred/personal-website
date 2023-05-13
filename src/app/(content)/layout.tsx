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
    <div className="bg-slate-800 min-h-screen">
      <div className="flex justify-between items-start fixed top-0 left-3 right-3">
        <Link
          className="rounded-full bg-green-300 border-4 border-emerald-700 mt-2 hover:scale-105 duration-150"
          href="/"
        >
          <Image alt="turtle" width="80" height="80" src="/turtlepan.png" />
        </Link>
        <MenuButton isHome={false} addTW="mt-4" />
      </div>
      {children}
    </div>
  );
}
