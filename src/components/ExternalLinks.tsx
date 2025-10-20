import GenericButton from "./GenericButton";
import GenericButtonSm from "./GenericButtonSm";
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
      <div className="flex w-72 flex-col items-center justify-center py-1">
        <div className="m2-3 py-2">External Links</div>
        <div className="flex w-full justify-between">
          <div>
            <GenericButtonSm
              text="GitHub"
              href="https://github.com/melonbred"
              img="/icons/github-mark.svg"
            />
          </div>
          <div>
            <GenericButtonSm
              text="Instagram"
              href="https://www.instagram.com/melonbred.kb/"
              img="/icons/iconmonstr-instagram-11.svg"
            />
          </div>
        </div>
      </div>

      <div className="md:hidden"></div>
    </div>
  );
}
