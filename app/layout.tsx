import type { Metadata } from "next";
import { Alegreya, Playfair_Display, Lora } from "next/font/google";
import { headers } from "next/headers";

import "./globals.css";

const alegreya = Alegreya({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-alegreya",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair-display",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Framer Market - Home",
  description: "Welcome to the Framer Market e-commerce app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = headers().get("x-next-pathname") as string;
  console.log("pathname:", pathname);
  return (
    <html lang="en">
      <body
        className={`${alegreya.variable} ${playfairDisplay.variable} ${lora.variable} antialiased h-screen overflow-hidden overflow-y-scroll scrollbar scrollbar-thumb-rounded scrollbar-thumb-gray-500 scrollbar-track-gray-200`}
      >
        {children}
      </body>
    </html>
  );
}
