import Image from "next/image";

type GenericButtonProps = {
  text: string;
  href: string;
  img: string;
};

export default function GenericButton({ text, href, img }: GenericButtonProps) {
  return (
    <a href={href}>
      <div className="bg-green-300 border-2 border-emerald-700 text-green-950 rounded-3xl w-80 h-16 flex items-center px-4 gap-16">
        <Image alt={text} height={40} width={40} src={img} />
        <div className="flex items-center">{text}</div>
      </div>
    </a>
  );
}
