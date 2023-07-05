import Image from "next/image";

type GenericButtonProps = {
  text: string;
  href: string;
  img: string;
};

export default function GenericButton({ text, href, img }: GenericButtonProps) {
  return (
    <a href={href} target="_blank">
      <div className="m-1 flex h-16 w-80 items-center rounded-3xl border-4 border-emerald-700 bg-green-300 text-green-950 transition duration-150 hover:scale-105 hover:bg-green-400">
        <div className="pl-4 pr-2">
          <Image alt={text} height={30} width={30} src={img} />
        </div>
        <div className="flex w-52 justify-center rounded-3xl">{text}</div>
      </div>
    </a>
  );
}
