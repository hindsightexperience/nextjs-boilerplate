"use client";
export default function BrowserOnlyNotFoundPage() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>This page does not exist.</p>
    </div>
  );
}

console.log("Is this running in the browser?", typeof document !== "undefined");
