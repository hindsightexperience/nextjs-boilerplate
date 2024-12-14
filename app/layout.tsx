"use client"; // This marks this file as a client-side component

//import type { Metadata } from "next";
import "./globals.css";
import React, { useState } from "react";
import VaultAnimation from "../components/VaultAnimation";
import { ReactNode } from "react";  // Import ReactNode

import { Roboto, Roboto_Mono } from "next/font/google";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"], // Optional: Specify weights
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "700"], // Optional: Specify weights
});


// Client-side component should have the `use client` directive
interface RootLayoutProps {
  children: ReactNode; // Explicitly type children as ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoMono.variable} bg-black text-white`}
      >
        {!animationComplete ? (
          <VaultAnimation onComplete={() => setAnimationComplete(true)} />
        ) : (
          <div>{children}</div>
        )}
      </body>
    </html>
  );
}

