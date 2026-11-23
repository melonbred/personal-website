import "../globals.css";
import Image from "next/image";
import Link from "next/link";
import MenuLg from "@/components/MenuLg";
import MobileFrame from "@/components/MobileFrame";
import ExternalLinks from "@/components/ExternalLinks";

// export const metadata = {
//   title: "MelonBred Keyboards",
//   description: "MelonBred personal website.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="lg:absolute lg:inset-0">
      {/* Below lg the window scrolls normally; the frame (top bar + border)
          is fixed over the viewport and content scrolls beneath it. At lg and
          up the content pane is its own scroll container beside the aside. */}
      <div className="flex min-h-screen flex-col bg-slate-800 px-2 pb-2 pt-[6.5rem] lg:h-screen lg:min-h-0 lg:flex-row lg:overflow-hidden lg:bg-slate-600 lg:p-2">
        <MobileFrame />
        {/* persistent sidebar for large resolution */}
        <aside className="hidden lg:relative lg:top-0 lg:mr-2 lg:flex lg:h-full lg:flex-col lg:items-center lg:bg-slate-600 lg:p-5 ">
          <div className="h-full overflow-auto overflow-x-hidden">
            <div className="flex h-full w-[325px] flex-col items-center justify-between">
              <div>
                <div className="flex flex-col items-center">
                  <div className="fixed top-0 z-10 flex w-[325px] items-center justify-evenly bg-slate-600 py-5">
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
                </div>
                <div>
                  <div className="mt-20 py-5">
                    <MenuLg />
                  </div>
                </div>
              </div>
              <div className="">
                <ExternalLinks />
              </div>
            </div>
          </div>
        </aside>
        <div className="w-full bg-slate-800 lg:overflow-hidden lg:rounded-3xl">
          <div className="flex justify-center lg:h-full lg:overflow-y-auto">
            <div className="w-full 2xl:w-5/6 3xl:w-1/2">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
