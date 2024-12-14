"use client";

import React, { useState } from "react";
import VaultAnimation from "../components/VaultAnimation";
import BitcoinConverter from "../components/BitcoinConverter";

export default function HomePage() {
  const [unlocked, setUnlocked] = useState(false);

  const handleUnlock = () => {
    setUnlocked(true);
  };

  return (
    <div>
      {!unlocked ? (
        <VaultAnimation onComplete={handleUnlock} />
      ) : (
        <BitcoinConverter />
      )}
    </div>
  );
}
