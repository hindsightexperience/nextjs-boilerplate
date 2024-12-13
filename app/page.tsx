"use client";  // Add this line at the very top

import { useState } from "react";
import VaultAnimation from "../components/VaultAnimation";
import BitcoinConverter from "../components/BitcoinConverter";

export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <main>
      {!showMainContent ? (
        <VaultAnimation onAnimationEnd={() => setShowMainContent(true)} />
      ) : (
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">Bitcoin Vault App</h1>
          <BitcoinConverter />
        </div>
      )}
    </main>
  );
}
