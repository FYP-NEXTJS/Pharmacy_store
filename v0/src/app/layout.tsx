import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Navbar/page";
import Footer from "./components/Footer/page";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// <-- Just change these lines
export const metadata: Metadata = {
  title: "Zahid Pharmacy Store", // <--- was 'Create Next App'
  description: "Welcome to the Zahid Pharmacy Store", // <--- optional
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar />
          <main className="flex-grow bg-gray-50">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
