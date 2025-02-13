"use client";

import { useState, useEffect } from "react";

interface Message {
  id: string;
  sender: string;
  message: string;
}

interface StickyNotesProps {
  isAdmin: boolean;
}

export default function StickyNotes({ isAdmin }: StickyNotesProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("/api/messages");
        if (!response.ok) throw new Error("Failed to fetch messages");
        const data = await response.json();
        setMessages(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load messages");
      } finally {
        setIsLoading(false);
      }
    };
    fetchMessages();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/messages/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete message");
      setMessages((prev) => prev.filter((msg) => msg.id !== id));
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="wish-forms w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className="relative p-6 rounded-lg shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-200"
          style={{
            background: "linear-gradient(135deg, #f9f3a1, #f8e88b)",
          }}
        >
          {/* Note Pin */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gray-700 rounded-full shadow-md"></div>

          {/* Note Content */}
          <p className="text-xl font-bold mb-2 text-gray-800">{msg.sender}</p>
          <p className="text-gray-700">{msg.message}</p>

          {/* Delete Button (Admin Only) */}
          {isAdmin && (
            <button
              onClick={() => handleDelete(msg.id)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              aria-label="Delete message"
            >
              🗑️
            </button>
          )}
        </div>
      ))}
    </div>
    </div>
  );
}