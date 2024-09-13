import AuthSignInButton from "@/components/AuthSignInButton";
import { AuthSignOutButton } from "@/components/AuthSignOutButton";
import { auth } from "@/../auth";
import GuestForm from "@/components/GuestForm";
import { prisma } from "../../../../prisma";

export default async function Guestbook() {
  // Retreive posts from database
  async function getPosts() {
    const listPosts = prisma.post.findMany({
      orderBy: {
        id: "desc",
      },
      include: {
        author: true,
      },
    });
    return listPosts;
  }
  const listPosts = await getPosts();

  // Session retrieved to add logged-in user name to page text
  const session = await auth();

  return (
    <>
      <div className="flex h-full min-h-full flex-col p-5 md:min-w-full md:p-10">
        <h1 className="flex justify-center text-3xl xl:text-6xl">Guestbook</h1>

        <p className="mb-5 mt-5 flex justify-center md:text-lg">
          Sign the guestbook! This is a space for you to leave comments,
          feedback, suggestions or just say hello. Sign in through Discord and
          you&apos;ll be all set to go.{" "}
        </p>

        {session ? (
          <div>
            <div className="flex">
              <p className="flex items-center md:text-lg ">
                Welcome, {session?.user?.name}!
              </p>
              <AuthSignOutButton />
            </div>
            <GuestForm />
          </div>
        ) : (
          <AuthSignInButton />
        )}

        <div className="mb-10">
          {listPosts.map((posts) => {
            return (
              <div className="mt-5" key={posts.id}>
                <div className="flex h-8">
                  <div className="h-8 w-8 overflow-hidden rounded-full border-2">
                    {posts.author.image ? (
                      <img
                        className="object-scale-down"
                        src={posts.author.image}
                      ></img>
                    ) : (
                      <div className="size-16 bg-white"></div>
                    )}
                  </div>
                  <div className="flex items-baseline p-1">
                    <h1 className="pl-1 pr-1 text-green-300 md:text-xl">
                      {posts.author.name}
                    </h1>
                    <p className="item-end pl-1 pr-1 text-xs">
                      {posts.date.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div
                  className="break-word ml-9 inline-block hyphens-auto rounded-xl  border-2 border-slate-400 bg-slate-600 p-1 text-sm md:text-base"
                  lang="en-us"
                >
                  <p>{posts.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
