import "../globals.css";
import { Chivo_Mono } from "next/font/google";
import Image from "next/image";
import MenuButton from "@/components/menu";

const chivoMono = Chivo_Mono({ subsets: ["latin"], display: "swap" });

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
    <html lang="en">
      <body className={chivoMono.className}>
        <div className="bg-slate-800 min-h-screen">
          <div className="flex justify-between items-start fixed top-0 left-3 right-3">
            <a
              className="rounded-full bg-green-300 border-2 border-emerald-700 mt-2 hover:scale-105 duration-150"
              href="/"
            >
              <Image alt="turtle" width="80" height="80" src="/turtlepan.png" />
            </a>

            <MenuButton isHome={false} addTW="mt-4" />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
