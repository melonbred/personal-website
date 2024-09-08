import { signOut } from "@/../auth";

export function AuthSignOutButton() {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button
          className="m-2 items-center rounded-3xl border-4 border-emerald-700 bg-green-300 p-1 text-green-950 transition duration-150 hover:scale-105 hover:bg-green-400"
          type="submit"
        >
          Sign Out
        </button>
      </form>
    </div>
  );
}
