import Link from "next/link";
import Image from "next/image";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

type KeyboardCardProps = {
  title: string;
  body: string;
  href: string;
  img: string;
};

export default function KeyboardCard({
  title,
  body,
  href,
  img,
}: KeyboardCardProps) {
  return (
    <div className="m-1 flex w-80 flex-col rounded-3xl bg-slate-600 text-white md:w-[800px] md:flex-row ">
      <div className="relative m-0 h-[239.76px] w-full overflow-hidden rounded-3xl border-4 border-slate-400 bg-slate-600 object-cover object-center md:h-[400px]">
        <Image
          className="object-cover"
          alt={title}
          src={img}
          fill={true}
          priority={true}
        />
      </div>
      <div className="flex flex-col items-start justify-center p-4 md:w-72">
        <h2 className="text-xl">{title}</h2>
        <p className="pt-1 text-left">{body}</p>
        <div className="mt-auto flex w-full items-center justify-end rounded-md pt-4">
          <Link
            href={href}
            className="flex items-center rounded-2xl border-4 border-emerald-700 bg-green-300 p-1 text-green-950 transition duration-100 hover:scale-110 hover:bg-green-400"
          >
            More!
            <ChevronDoubleRightIcon className="h-5 w-5 "></ChevronDoubleRightIcon>
          </Link>
        </div>
      </div>
    </div>
  );
}
