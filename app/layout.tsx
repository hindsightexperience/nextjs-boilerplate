"use client";

import "./globals.css";
import React, { useState } from "react";
import VaultAnimation from "../components/VaultAnimation";
import { ReactNode } from "react";

import { Roboto } from "next/font/google";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [animationComplete, setAnimationComplete] = useState(false);
  
  return (
    <html lang="en" className={`${roboto.variable} ${roboto.variable}`}>
      <body className="bg-black text-white">
        {!animationComplete ? (
          <VaultAnimation onComplete={() => setAnimationComplete(true)} />
        ) : (
          <div>{children}</div>
        )}
      </body>
    </html>
  );
  
}
