import { auth } from "@/../auth";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user?.image) return <div></div>;

  return (
    <div className="size-16 rounded-full">
      <img src={session.user.image} alt="User Avatar" />
    </div>
  );
}
