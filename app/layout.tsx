import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import ClientSessionProvider from "./components/ClientSessionProvider";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-courier-prime",
});

export const metadata: Metadata = {
  title: "MawMaw",
  description: "Happy Munyung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/8293cd5b8c.js" crossOrigin="anonymous"></script>
      </head>
      <body className={`${courierPrime.variable} font-courier antialiased`}>
        <ClientSessionProvider>
          <Navbar />
          {children}
        </ClientSessionProvider>
      </body>
    </html>
  );
}