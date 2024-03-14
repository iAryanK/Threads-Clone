import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads",
  description: "A Next.js 14 Threads Web Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
          <div className="flex min-h-screen w-full items-center justify-center">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
