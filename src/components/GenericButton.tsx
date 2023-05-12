import Image from "next/image";

type GenericButtonProps = {
  text: string;
  href: string;
  img: string;
};

export default function GenericButton({ text, href, img }: GenericButtonProps) {
  return (
    <a href={href} target="_blank">
      <div className="bg-green-300 border-2 border-emerald-700 text-green-950 rounded-3xl w-80 h-16 flex items-center m-1 transition duration-150 hover:scale-105">
        <div className="pl-4 pr-2">
          <Image alt={text} height={30} width={30} src={img} />
        </div>
        <div className="flex w-52 justify-center">{text}</div>
      </div>
    </a>
  );
}
