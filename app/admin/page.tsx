"use client";

import { SessionProvider } from "next-auth/react"; 
import AdminPage from "../components/admin-login";

export default function AdminRootLayout({ children, }: { children: React.ReactNode; }) { 
  return ( 
            <SessionProvider> <AdminPage /> {children} </SessionProvider> 
        );
      }