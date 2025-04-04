import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SalaryCalculatorContextProvider } from "@/providers/SalaryContextProvider";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Palgakalkulaator",
  description: "Arvuta oma neto- ja brutopalk ning tööandja kulu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SalaryCalculatorContextProvider>
          {children}
        </SalaryCalculatorContextProvider>
      </body>
    </html>
  );
}
