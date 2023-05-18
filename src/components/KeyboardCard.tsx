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
      className="bg-green-300 border-4 border-emerald-700 text-green-950 rounded-3xl w-80 md:w-96 h-32 flex items-center m-1 transition duration-150 hover:scale-105"
    >
      <div className="pl-4 pr-2">
        <Image alt={title} height={30} width={30} src={img} />
      </div>
      <div className="flex flex-col pl-4">
        <h2 className="text-lg">{title}</h2>
        <p>{body}</p>
      </div>
    </Link>
  );
}
