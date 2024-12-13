import type { Metadata } from "next";
import "./globals.css";

import { Roboto, Roboto_Mono } from "next/font/google";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"], // Optional: Specify weights
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "700"], // Optional: Specify weights
});


export const metadata: Metadata = {
  title: "Bitcoin Vault App",
  description: "A sleek and secure app for Bitcoin enthusiasts.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoMono.variable} antialiased`}
      >
        <header className="p-4 bg-[var(--color-primary)] text-[var(--color-secondary)]">
          <h1 className="text-2xl font-bold">Bitcoin Vault</h1>
        </header>
        <main>{children}</main>
        <footer className="p-4 bg-[var(--color-secondary)] text-[var(--color-light)]">
          <p>© 2024 Bitcoin Vault. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}

