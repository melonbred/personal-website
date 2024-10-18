import Image from "next/image";

type GenericButtonProps = {
  text: string;
  href: string;
  img: string;
};

export default function GenericButtonSm({
  text,
  href,
  img,
}: GenericButtonProps) {
  return (
    <a href={href} target="_blank">
      <div className="relative flex h-16 w-[140px] items-center justify-evenly rounded-3xl border-4 border-emerald-700 bg-green-300 transition-all duration-150 hover:scale-105 hover:bg-green-400">
        <Image
          className="object-fill"
          alt={text}
          height={25}
          width={25}
          src={img}
        />

        <div className="text-black">{text}</div>
      </div>
    </a>
  );
}
