"use client";

import { SessionProvider } from "next-auth/react";
import AdminPage from "../components/admin-login";

export default function AdminRootLayout() {
  return (
    <SessionProvider>
      <AdminPage />
    </SessionProvider>
  );
}