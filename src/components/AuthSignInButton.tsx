import { signIn } from "@/../auth";
import Image from "next/image";

export default function AuthSignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("discord");
      }}
    >
      <button
        className="m-2 flex items-center justify-center rounded-3xl border-4 border-emerald-700 bg-green-300 p-1 text-green-950 transition duration-150 hover:scale-105 hover:bg-green-400"
        type="submit"
      >
        <Image
          alt="Discord Mark"
          src="/icons/discord-mark-black.png"
          width={30}
          height={30}
          className="ml-2"
        />
        <span className="p-2">Signin with Discord</span>
      </button>
    </form>
  );
}
