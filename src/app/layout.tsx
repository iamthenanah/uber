import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uber Clone",
  description:
    "Request rides or drive and earn - Uber clone built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}
