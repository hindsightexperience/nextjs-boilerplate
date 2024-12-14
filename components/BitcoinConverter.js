"use client";

import React, { useState, useEffect } from "react";

const BitcoinConverter = () => {
  const [price, setPrice] = useState(null);
  const [satsPerVbyte, setSatsPerVbyte] = useState(null);
  const [currency, setCurrency] = useState("USD");
  const [conversionType, setConversionType] = useState("btcToUsd");
  const [inputValue, setInputValue] = useState("");
  const [convertedValue, setConvertedValue] = useState("");

  const currencyOptions = [
    "USD", "EUR", "GBP", "JPY", "CAD", "AUD", "INR", "CNY", "CHF", "BRL",
  ];

  const conversionOptions = [
    { label: "BTC to USD", value: "btcToUsd" },
    { label: "USD to BTC", value: "usdToBtc" },
    { label: "BTC to Satoshis", value: "btcToSats" },
    { label: "Satoshis to BTC", value: "satsToBtc" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const priceRes = await fetch("https://blockchain.info/ticker");
        const priceData = await priceRes.json();
        setPrice(priceData[currency].last);

        const mempoolRes = await fetch("https://mempool.space/api/v1/fees/recommended");
        const mempoolData = await mempoolRes.json();
        setSatsPerVbyte(mempoolData.fastestFee);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currency]);

  const handleConversion = () => {
    let result = 0;

    switch (conversionType) {
      case "btcToUsd":
        result = (parseFloat(inputValue) * price).toFixed(2);
        break;
      case "usdToBtc":
        result = (parseFloat(inputValue) / price).toFixed(8);
        break;
      case "btcToSats":
        result = (parseFloat(inputValue) * 1e8).toFixed(0);
        break;
      case "satsToBtc":
        result = (parseFloat(inputValue) / 1e8).toFixed(8);
        break;
      default:
        result = "Invalid conversion";
    }

    setConvertedValue(result);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <h1 className="text-3xl font-semibold mb-6 text-orange-500">
        Bitcoin Converter
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {/* Currency Selector */}
        <select
          className="bg-gray-800 text-white border border-gray-600 p-3 rounded-md hover:border-orange-500 focus:outline-none"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* Conversion Type Selector */}
        <select
          className="bg-gray-800 text-white border border-gray-600 p-3 rounded-md hover:border-orange-500 focus:outline-none"
          value={conversionType}
          onChange={(e) => setConversionType(e.target.value)}
        >
          {conversionOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Input Field */}
      <input
        type="number"
        className="bg-gray-800 text-white border border-gray-600 p-3 rounded-md w-full sm:w-1/2 mb-4 focus:outline-none focus:border-orange-500"
        placeholder="Enter value"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {/* Convert Button */}
      <button
        className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition"
        onClick={handleConversion}
      >
        Convert
      </button>

      {/* Result Display */}
      <div className="mt-6">
        <p className="text-xl">
          Converted Value:{" "}
          <span className="font-semibold text-orange-500">{convertedValue}</span>
        </p>
        <p className="text-lg mt-2">
          Current BTC Price ({currency}):{" "}
          <span className="font-semibold text-orange-500">
            {price ? `$${price}` : "Loading..."}
          </span>
        </p>
        <p className="text-lg mt-2">
          Current Sats/VByte:{" "}
          <span className="font-semibold text-orange-500">
            {satsPerVbyte ? `${satsPerVbyte} sats/vbyte` : "Loading..."}
          </span>
        </p>
      </div>
    </div>
  );
};

export default BitcoinConverter;
