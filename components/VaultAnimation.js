"use client"; // Ensure this file only runs client-side

import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import Lottie from "react-lottie-player";
import retinaScanAnimation from "../animations/retina-scan.json";
import keypadAnimation from "../animations/keypad.json";

const VaultAnimation = ({ onComplete }) => {
  const [stage, setStage] = useState(1);

  useEffect(() => {
    console.log("VaultAnimation component mounted");
  }, []);

  const handleKnobTurn = () => {
    // Ensure DOM is only accessed in the browser
    if (typeof window !== "undefined") {
      const knob = document.querySelector(".vault-knob");
      if (knob) {
        gsap.to(knob, {
          rotation: 360,
          duration: 2,
          ease: "power2.out",
          onComplete: () => onComplete(),
        });
      }
    }
  };

  return (
    <div className="vault-animation-container flex flex-col items-center justify-center h-screen bg-black text-white">
      {stage === 1 && (
        <div className="retina-scan">
          <h2 className="text-xl mb-4">Perform Retina Scan</h2>
          <Lottie
            loop={false}
            animationData={retinaScanAnimation}
            play
            className="w-64 h-64"
          />
          <button
            onClick={() => setStage(2)}
            className="mt-4 p-2 bg-orange-500 rounded text-white hover:bg-orange-600"
          >
            Continue
          </button>
        </div>
      )}

      {stage === 2 && (
        <div className="keypad-entry">
          <h2 className="text-xl mb-4">Almost There ₿⚛️</h2>
          <Lottie
            loop={false}
            animationData={keypadAnimation}
            play
            className="w-64 h-64"
          />
          <button
            onClick={() => setStage(3)}
            className="mt-4 p-2 bg-orange-500 rounded text-white hover:bg-orange-600"
          >
            Unlock Vault
          </button>
        </div>
      )}

      {stage === 3 && (
        <div className="vault-knob-section flex flex-col items-center">
          <h2 className="text-xl mb-4">Turn the Vault Knob</h2>
          <div
            className="vault-knob w-32 h-32 rounded-full bg-gray-700 border-4 border-orange-500 flex items-center justify-center cursor-pointer"
            onClick={handleKnobTurn}
          >
            <div className="inner-knob w-12 h-12 bg-orange-500 rounded-full"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VaultAnimation;
