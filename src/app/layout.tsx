"use client";
"";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollUp from "@/components/Common/ScrollUp";
import { Inter } from "next/font/google";
import Head from "next/head"; // ✅ Use Next.js Head component
import { Toaster } from "react-hot-toast";
import { Providers } from "./providers"; // ✅ Ensure this is correct

import "react-modal-video/css/modal-video.css"; // ✅ Ensure this is correctly imported
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head> {/* ✅ Replace <head /> with Next.js Head component */}
        <title>My App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers> {/* ✅ Ensuring Providers doesn't cause an issue */}
          <Toaster position="top-center" reverseOrder={false} />
          <Header />
          {children}
          <Footer />
          <ScrollUp />
        </Providers>
      </body>
    </html>
  );
}
