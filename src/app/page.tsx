import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import GenericButton from "@/components/GenericButton";

export default function Home() {
  return (
    <div className="flex justify-center h-screen items-center bg-slate-800">
      <div className="flex flex-col items-center">
        <div className="md:flex md:justify-center m-4 w-max">
          <div className="flex justify-center">
            <div className="h-32 w-32 overflow-hidden rounded-full">
              <Image
                alt="MB Headshot"
                height={10000}
                width={10000}
                src="/headshot.jpg"
                className="rounded-full scale-125"
              />
            </div>
          </div>
          <div className="w-96 px-4 font-mono tracking-tight flex flex-col justify-center text-center md:w-96 md:text-left">
            <h1 className="text-xl py-2">Hi! My name is Cliff.</h1>
            <p className="text-sm">
              Most people on the internet know me as MelonBred. I&apos;m a
              mechanical keyboard hobbyist that enjoys drawing up PCBs and cases
              on my free time.
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
        <GenericButton
          text="Griffin 60% Keyboard"
          href="https://geekhack.org/index.php?topic=120200.0"
          img="/DocumentCheck.svg"
        />
      </div>
    </div>
  );
}
