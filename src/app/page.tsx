import Image from "next/image";
import GenericButton from "@/components/GenericButton";
import MenuButton from "@/components/menu";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-slate-800 pt-20">
      <div className="flex flex-col items-center">
        <div className="m-4 w-max md:flex md:justify-center">
          <div className="flex justify-center">
            <div className="h-32 w-32 overflow-hidden rounded-full">
              <Image
                alt="MB Headshot"
                height={10000}
                width={10000}
                src="/headshot.jpg"
                className="scale-125 rounded-full"
              />
            </div>
          </div>
          <div className="flex w-96 flex-col justify-center px-4 text-center md:w-96 md:text-left">
            <h1 className="py-2 text-xl">Hi! My name is Cliff.</h1>
            <p className="text-sm">
              Most people on the internet know me as MelonBred. I&apos;m a
              mechanical keyboard hobbyist that enjoys drawing up PCBs and cases
              on my free time.
            </p>
          </div>
        </div>
        <MenuButton isHome={true} />
        <div className="mt-6">External Links</div>
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
