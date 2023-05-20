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
      className="m-1 flex w-80 flex-col rounded-3xl bg-green-300 text-green-950 transition duration-150 hover:scale-[1.043] md:w-[360px] "
    >
      <img
        className="m-0 h-[239.76px] w-full overflow-hidden rounded-3xl border-4 border-emerald-700 bg-green-300 object-cover object-center"
        alt={title}
        src={img}
      ></img>
      <div className="flex flex-col items-start p-4">
        <h2 className="text-lg">{title}</h2>
        <p className="text-left">{body}</p>
      </div>
    </Link>
  );
}