import AuthSignInButton from "@/components/AuthSignInButton";
import { AuthSignOutButton } from "@/components/AuthSignOutButton";
import { auth } from "@/../auth";
import GuestForm from "@/components/GuestForm";
import { prisma } from "../../../../prisma";

export default async function Guestbook() {
  // Retreive posts from database
  async function getPosts() {
    const listPosts = prisma.post.findMany({
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
      <div className="min-w-screen flex h-full min-h-full flex-col items-center p-5 md:p-10">
        <h1 className="text-3xl xl:text-6xl">Guestbook</h1>
        <div className="min-w-screen flex flex-col items-center p-5 md:p-10">
          <AuthSignInButton />
          <AuthSignOutButton />
          <div>Welcome {session?.user?.name}!</div>
          <div className="m-5 border-2">
            <GuestForm />
          </div>
          <div className="border-2">
            <h2 className="m-5 text-xl underline">Posts</h2>
            {listPosts.reverse().map((posts) => {
              return (
                <div className="flex" key={posts.id}>
                  <div className="h-16 w-16 overflow-hidden rounded-full border-2">
                    {posts.author.image ? (
                      <img
                        className="object-scale-down"
                        src={posts.author.image}
                      ></img>
                    ) : (
                      <div className="size-16 bg-white"></div>
                    )}
                  </div>
                  <div className="p-1">
                    <h1 className="text-xl">{posts.author.name}</h1>
                    <p className="text-xs">{posts.date.toString()}</p>
                    <p>{posts.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
