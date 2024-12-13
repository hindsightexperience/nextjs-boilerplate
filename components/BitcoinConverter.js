"use client";  // Add this line at the very top

import React, { useState, useEffect } from "react";

const BitcoinConverter = () => {
  const [price, setPrice] = useState(null);
  const [sats, setSats] = useState("");
  const [usd, setUsd] = useState("");

  useEffect(() => {
    fetch("/api/price")
      .then((res) => res.json())
      .then((data) => setPrice(data.price));
  }, []);

  const calculateSats = (amount) => {
    setSats((amount / price * 1e8).toFixed(2));
  };

  const calculateUsd = (amount) => {
    setUsd((amount * price / 1e8).toFixed(2));
  };

  return (
    <div>
      <h2>Bitcoin Price: {price ? `$${price}` : "Loading..."}</h2>
      <div>
        <h3>Sats to USD</h3>
        <input type="number" onChange={(e) => calculateUsd(e.target.value)} />
        <p>USD: {usd}</p>
      </div>
      <div>
        <h3>USD to Sats</h3>
        <input type="number" onChange={(e) => calculateSats(e.target.value)} />
        <p>Sats: {sats}</p>
      </div>
    </div>
  );
};

export default BitcoinConverter;
