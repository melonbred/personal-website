"use client";

import { useState } from "react";

// Form handling funciont

export default function GuestForm() {
  const [content, setContent] = useState("");
  const [status, setStatus] = useState({});

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
        console.log(status);
        setContent("");
      } else {
        setStatus({
          type: "error",
          message: "Failed to save content. Please try again.",
        });
        console.log(status);
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "An error occurred. Please try again.",
      });
      console.log(status);
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="text-black"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
