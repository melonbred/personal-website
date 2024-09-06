import { signOut } from "@/../auth";

export function AuthSignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button className="border-2" type="submit">
        Sign Out
      </button>
    </form>
  );
}
