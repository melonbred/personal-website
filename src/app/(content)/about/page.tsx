import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl">About Me</h1>
      <div className="p-5 md:px-20">
        <p className="pt-5">
          Located in the San Francisco, Bay Area, I&apos;m an engineer by day
          with a love for tinkering and learning. Some other hobbies of mine
          include skateboarding, snowboarding/skiing, photography, and all
          things outdoors.
        </p>
        <p className="pt-5">
          My mechanical keyboard journey started around early 2018. After a year
          into the hobby, the idea of tinkering and creating became far more
          interesting than just consuming. So with the encouragement from
          friends in the community, I decided to give it a go.{" "}
        </p>
        <p className="pt-5">
          Fast-forward to present day, and I&apos;ve been fortunate enough to
          have drawn up a handful of keyboards! With help from some dear friends
          and wonderful community members, some of these creations have made it
          to several hundred desks and workstations.
        </p>
        <p className="pt-5">
          I hope to keep working on projects as ideas strike, and you&apos;ll
          likely find them here on this site.
        </p>
        <div className="flex items-center justify-end p-10">
          <p className="px-5">Thanks for visiting!</p>
          <Image
            src="./images/misc/turtlepan_white.svg"
            width="75"
            height="75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
