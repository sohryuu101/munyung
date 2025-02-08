"use client";

import React, { useState } from "react";

interface WishFormsProps {
  onMessageAdded: () => void; // Callback to refetch messages after adding a new one
}

export default function WishForms({ onMessageAdded }: WishFormsProps) {
  const [sender, setSender] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!sender || !message) {
      setError("Sender and message are required.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sender, message }),
      });

      if (!response.ok) {
        throw new Error("Failed to add message");
      }

      // Clear the form fields
      setSender("");
      setMessage("");

      // Trigger the callback to refetch messages
      onMessageAdded();
    } catch (error) {
      console.error("Error adding message:", error);
      setError("Failed to add message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="wish-forms w-full">
      <h2 className="text-white text-center text-xl pt-10">Write Your Wish Below 📝! </h2>
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex flex-col space-y-4 pt-5">
        <input
          type="text"
          placeholder="Your Name"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          className="p-2 border rounded-lg w-full max-w-sm mx-auto text-black"
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-2 border rounded-lg w-full max-w-sm mx-auto text-black"
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 text-white p-2 rounded-lg w-full max-w-sm mx-auto hover:bg-blue-600 disabled:bg-blue-300"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
    </div>
  );
}