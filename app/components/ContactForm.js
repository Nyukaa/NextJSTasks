"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer test",
        },
        body: JSON.stringify({
          name,
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setResponse({ type: "error", text: data.error });
      } else {
        setResponse({ type: "success", text: data.message });
        setName("");
        setMessage("");
      }
    } catch (error) {
      setResponse({ type: "error", text: "Something went wrong" });
    }

    setLoading(false);
  }

  return (
    <div className="p-4 border rounded-md shadow-md max-w-md flex flex-col">
      <h2 className="text-xl font-bold mb-3">Contact Form</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          className="border p-2 rounded"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          className="bg-blue-500 text-white p-2 rounded"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

      {response && (
        <p
          className={
            response.type === "success"
              ? "text-green-600 mt-3"
              : "text-red-600 mt-3"
          }
        >
          {response.text}
        </p>
      )}
    </div>
  );
}
