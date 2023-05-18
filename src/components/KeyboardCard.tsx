import Image from "next/image";
import Link from "next/link";

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
    <Link
      href={href}
      className="m-1 flex h-80 w-80 flex-col rounded-3xl bg-green-300 text-green-950 transition duration-150 hover:scale-105  md:w-96 "
    >
      <div className="">
        <img
          className="m-auto h-56 w-full overflow-hidden rounded-3xl border-4 border-emerald-700 bg-green-300 object-cover object-center"
          alt={title}
          src="/keyboards/lux_keyboard.JPG"
        ></img>
      </div>
      <div className="flex h-32 flex-col  pl-4">
        <h2 className="text-lg">{title}</h2>
        <p>{body}</p>
      </div>
    </Link>
  );
}
