import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import GenericButton from "@/components/GenericButton";

export default function Home() {
  return (
    <div className="flex justify-center h-screen items-center bg-slate-800">
      <div className="flex flex-col items-center">
        <Image
          alt="MB Headshot"
          height={150}
          width={150}
          src="/headshot.jpg"
          className="rounded-full"
        />
        <div>
          <h1>Hi! My name is MelonBred.</h1>
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
