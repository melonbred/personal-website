import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import GenericButton from "@/components/GenericButton";

export default function Home() {
  return (
    <div className="flex justify-center h-screen items-center bg-slate-800">
      <div className="flex flex-col items-center">
        <div className="flex justify-center m-4">
          <div className="h-32 w-32 overflow-hidden rounded-full">
            <Image
              alt="MB Headshot"
              height={10000}
              width={10000}
              src="/headshot.jpg"
              className="rounded-full scale-125"
            />
          </div>
          <div className="w-96 px-4 font-mono flex flex-col justify-center">
            <h1 className="text-xl py-2">Hi! My name is MelonBred.</h1>
            <p className="text-sm">
              I&apos;m a self-taught mechanical keyboard hobbyist that enjoys
              drawing up PCBs and keyboard cases on my free time.
            </p>
          </div>
        </div>
        <GenericButton
          text="GitHub"
          href="https://github.com/melonbred"
          img="/github-mark.svg"
        />
        <GenericButton
          text="Instagram"
          href="https://www.instagram.com/melonbred.kb/"
          img="/iconmonstr-instagram-11.svg"
        />
      </div>
    </div>
  );
}
