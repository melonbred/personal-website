import GenericButton from "./GenericButton";
import Link from "next/link";
import Image from "next/image";

export default function ExternalLinks() {
  return (
    <div className="flex flex-col items-center">
      <GenericButton
        text="Shop"
        href="https://shop.melonbred.dev"
        img="/icons/shoppingBag.svg"
      />
      <div className="flex w-full flex-col items-center justify-center py-1">
        <div className="m2-3 py-2">External Links</div>
        <div className="flex w-full justify-between">
          <Link
            href="https://github.com/melonbred"
            target="_blank"
            className="relative flex h-16 w-36 items-center justify-evenly rounded-3xl border-4 border-emerald-700 bg-green-300 transition-all duration-150 hover:scale-105 hover:bg-green-400"
          >
            <Image
              alt="MelonBred GitHub"
              src="/icons/github-mark.svg"
              width={30}
              height={30}
              className="object-fill"
            />
            <div className="text-black">GitHub</div>
          </Link>
          <Link
            href="https://www.instagram.com/melonbred.kb/"
            target="_blank"
            className="relative flex h-16 w-36 items-center justify-evenly rounded-3xl border-4 border-emerald-700 bg-green-300 transition-all duration-150 hover:scale-105 hover:bg-green-400"
          >
            <Image
              alt="MelonBred Instagram"
              src="/icons/iconmonstr-instagram-11.svg"
              width={25}
              height={25}
              className="object-fill"
            />
            <div className="text-black">Instagram</div>
          </Link>
        </div>
      </div>
      {/* <GenericButton
        text="GitHub"
        href="https://github.com/melonbred"
        img="/icons/github-mark.svg"
      />
      <GenericButton
        text="Instagram"
        href="https://www.instagram.com/melonbred.kb/"
        img="/icons/iconmonstr-instagram-11.svg"
      /> */}
      <div className="md:hidden"></div>
    </div>
  );
}
