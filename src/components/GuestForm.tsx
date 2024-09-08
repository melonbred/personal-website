"use client";

import { useState } from "react";

// Form handling funciont

export default function GuestForm() {
  const [content, setContent] = useState("");
  const [status, setStatus] = useState({});
  const [count, setCount] = useState(0);

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
        id="guestForm"
        className="overflow-hidden rounded-2xl border-4 border-slate-400 bg-slate-600 md:w-3/4"
        onSubmit={handleOnSubmit}
      >
        <textarea
          id="guestForm"
          value={content}
          onChange={(e) => (
            setContent(e.target.value), setCount(e.target.value.length)
          )}
          className="w-full resize-none rounded-xl border-l-8 border-white p-2 text-black outline-none focus:border-green-300"
          maxLength={500}
          rows={4}
        />
        <div className="flex justify-between bg-slate-600">
          <p>{count}/500</p>
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
