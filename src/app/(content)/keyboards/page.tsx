import KeyboardCard from "@/components/KeyboardCard";

export default function About() {
  return (
    <div className="min-w-screen flex flex-col items-center pb-5 pt-24">
      <h1 className="pt-4 text-3xl">Keyboards</h1>
      <div className="min-w-screen p-4 md:p-10">
        <h2 className="pt-5 text-2xl">Series 01</h2>
        <p className="pb-5 pt-2">
          sdflksahfljl afiwejiofo lefljsafjkahsf haskjfh wuehufilhliskfjhjksa
          kjhf kjfjkhksjhfk hfkhskfhkhsf uiwehauihf lkhfkje hkl fhissfhsh
          fsiufiusuif sifhjhsiufhi whiufhjkshf isugf iusggfsfhsig
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-7 text-center lg:grid-cols-2 xl:grid-cols-3">
            <KeyboardCard
              title="MB-44"
              body="This is a test of what the card will look like. You dingus."
              href="/keyboards/mb44"
              img="/keyboards/images/lux_keyboard.JPG"
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
