"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react"; // Import useSession
import Jumbotron from "./components/jumbotron";
import Wish from "./components/wish";
import Gallery from "./components/gallery";
import Video from "./components/video";
import WishForms from "./components/wish-forms";
import StickyNotes from "./components/sticky-notes";
import Closing from "./components/closing";
import Footer from "./components/footer";

export default function Home() {
  const { data: session } = useSession();
  const [refreshKey, setRefreshKey] = useState(0); // Used to trigger a refetch of messages

  const handleMessageAdded = () => {
    setRefreshKey((prev) => prev + 1); // Increment the key to trigger a refetch
  };

  return (
    <>
      <Jumbotron />
      <Wish />
      <Gallery />
      <div
        className="min-h-screen p-8 wavy-top"
        style={{
          background: "radial-gradient(circle, rgba(255,183,197,1) 0%, rgba(255,216,224,1) 100%)",
        }}
      >
        {/* Pass isAdmin true if session exists */}
        <StickyNotes key={refreshKey} isAdmin={!!session} />
        <WishForms onMessageAdded={handleMessageAdded} />
        <Closing />
        <Footer />
      </div>
    </>
  );
}