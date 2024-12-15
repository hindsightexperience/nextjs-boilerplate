"use client";

export const dynamic = "force-dynamic";

export default function BrowserOnlyNotFoundPage() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>This page does not exist.</p>
    </div>
  );
}

if (typeof document !== "undefined") {
  console.log("Is this running in the browser?", true);
}
