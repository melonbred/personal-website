"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Form handling function
export default function GuestForm() {
  const [content, setContent] = useState("");
  const [status, setStatus] = useState({});
  const [count, setCount] = useState(0);

  const router = useRouter();

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    setStatus({});

    try {
      const response = await fetch("/api/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Content saved successfully!" });
        console.log({ status });
        setContent("");
        setCount(0);
        router.refresh();
      } else {
        setStatus({
          type: "error",
          message: "Failed to save content. Please try again.",
        });
        console.log({ status });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "An error occurred. Please try again.",
      });
      console.log({ status });
    }
  };

  return (
    <>
      <form
        name="guestPost"
        className="overflow-hidden rounded-2xl border-4 border-slate-400 bg-slate-600 md:w-full"
        onSubmit={handleOnSubmit}
      >
        <textarea
          name="guestPost"
          value={content}
          onChange={(e) => (
            setContent(e.target.value), setCount(e.target.value.length)
          )}
          className="w-full resize-none rounded-xl border-l-8 border-white p-3 text-black outline-none focus:border-green-300"
          maxLength={500}
          rows={3}
          placeholder="Howdy! "
        />

        <div className="flex items-center justify-between bg-slate-600">
          <p className="p-3">{count}/500</p>
          <button
            className="m-2 items-center rounded-3xl border-4 border-emerald-700 bg-green-300 p-1 text-green-950 transition duration-150 hover:scale-105 hover:bg-green-400"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
