import { signIn } from "@/../auth";

export default function AuthSignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("discord");
      }}
    >
      <button className="border-2" type="submit">
        Signin with Discord
      </button>
    </form>
  );
}
