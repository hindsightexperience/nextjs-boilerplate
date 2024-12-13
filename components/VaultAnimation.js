"use client";  // Add this line at the very top

import React, { useEffect } from "react";
import { gsap } from "gsap";

const VaultAnimation = ({ onAnimationEnd }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".vault-door", { rotationY: 180, duration: 2, ease: "power2.inOut" })
      .to(".vault-content", { opacity: 1, duration: 1 }, "-=1")
      .eventCallback("onComplete", onAnimationEnd);
  }, [onAnimationEnd]);

  return (
    <div className="vault">
      <div className="vault-door"></div>
      <div className="vault-content">
        <h1>Welcome to Bitcoin Vault</h1>
      </div>
      <style jsx>{`
        .vault {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: #121212;
          color: #f0a500;
        }
        .vault-door {
          width: 200px;
          height: 200px;
          background: #f0a500;
          border-radius: 50%;
          transform-origin: center;
          transform: perspective(400px) rotateY(0deg);
        }
        .vault-content {
          opacity: 0;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default VaultAnimation;
