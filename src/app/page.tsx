import Image from "next/image";
import ExternalLinks from "@/components/ExternalLinks";
import MenuButton from "@/components/menu";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center overflow-x-hidden bg-slate-800 pt-20">
      <div className="flex flex-col items-center">
        <div className="m-4 w-max md:flex md:justify-center">
          <div className="flex justify-center">
            <div className="h-32 w-32 overflow-hidden rounded-full">
              <Image
                alt="MB Headshot"
                height={10000}
                width={10000}
                src="/images/misc/headshot.jpg"
                className="scale-125 rounded-full"
              />
            </div>
          </div>
          <div className="flex w-96 flex-col justify-center px-4 pb-6 text-center md:w-96 md:text-left">
            <h1 className="py-2 text-xl">Hi! My name is Cliff.</h1>
            <p className="text-sm">
              Most people on the internet know me as MelonBred. I&apos;m a
              mechanical keyboard hobbyist that enjoys drawing up PCBs and cases
              on my free time.
            </p>
          </div>
        </div>
        <MenuButton isHome={true} />
        <ExternalLinks />
      </div>
    </div>
  );
}
