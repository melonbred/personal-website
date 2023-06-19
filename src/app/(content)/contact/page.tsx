import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div className="min-w-screen flex h-full flex-col items-center">
        <h1 className="text-3xl">Contact</h1>
        <div className="flex flex-col items-center p-5 md:px-20">
          <p className="py-5">
            If you have any questions about any projects that I have worked on,
            or would like to collaborate on a project in the future, please feel
            free to shoot me a message at{" "}
            <Link
              href="mailto:contact@melonbred.dev"
              className="underline hover:decoration-emerald-400/80 hover:decoration-4"
            >
              contact@melonbred.dev
            </Link>
            .
          </p>
          <p className=""></p>
        </div>
      </div>
    </>
  );
}
