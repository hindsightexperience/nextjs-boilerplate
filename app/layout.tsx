"use client";

import "./globals.css";
import React, { useState } from "react";
import VaultAnimation from "../components/VaultAnimation";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <html lang="en">
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
