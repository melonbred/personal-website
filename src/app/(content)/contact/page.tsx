import Link from "next/link";

export default function Contact() {
  return (
    <>
      <head>
        <title>MelonBred Keyboards - Contact</title>
        <meta name="description" content="MelonBred Keyboards - Contact Page" />
        <meta
          name="og:description"
          content="MelonBred Keyboards - Contact Page"
        />
      </head>
      <div className="min-w-screen flex h-full min-h-full flex-col items-center p-5 md:p-10">
        <h1 className="text-3xl xl:text-6xl">Contact</h1>
        <div className="items-center p-5 md:px-10">
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
        </div>
      </div>
    </>
  );
}
