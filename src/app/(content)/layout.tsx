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
    <div className="min-h-screen bg-slate-800">
      <div className="fixed left-3 right-3 top-0 z-10 flex items-start justify-between backdrop-blur">
        <Link
          className="mt-2 rounded-full border-4 border-emerald-700 bg-green-300 duration-150 hover:scale-105"
          href="/"
        >
          <Image
            alt="turtle"
            width="80"
            height="80"
            src="/images/turtlepan.png"
          />
        </Link>
        <MenuButton isHome={false} addTW="mt-4" />
      </div>
      {children}
    </div>
  );
}
