import KeyboardCard from "@/components/KeyboardCard";

export default function About() {
  return (
    <div className="min-w-screen pt-24 pb-5 flex flex-col items-center">
      <h1 className="text-3xl pt-4">Keyboards</h1>
      <div className="min-w-screen p-4 md:p-10">
        <h2 className="pt-5 text-2xl">Series 01</h2>
        <p className="pt-2 pb-5">
          sdflksahfljl afiwejiofo lefljsafjkahsf haskjfh wuehufilhliskfjhjksa
          kjhf kjfjkhksjhfk hfkhskfhkhsf uiwehauihf lkhfkje hkl fhissfhsh
          fsiufiusuif sifhjhsiufhi whiufhjkshf isugf iusggfsfhsig
        </p>
        <div className="flex justify-center">
          <div className="grid text-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
            <KeyboardCard
              title="MB-44"
              body="This is a test"
              href="/keyboards/mb44"
              img="/github-mark.svg"
            />
            <KeyboardCard
              title="MB-44"
              body="This is a test"
              href="/keyboards/mb44"
              img="/github-mark.svg"
            />
            <KeyboardCard
              title="MB-44"
              body="This is a test"
              href="/keyboards/mb44"
              img="/github-mark.svg"
            />
          </div>
          <p className="pt-5"></p>
          <p className="pt-5"></p>
          <p className="pt-5"></p>
        </div>
      </div>
    </div>
  );
}
