import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight:['300','400','500','600','700']});

export const metadata: Metadata = {
  title: "Bargain Buddy",
  description: "Bargaining moved from the streets to the online shops. Find yourself the best price for the product you want.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-10xl mx-auto">
          <Navbar />
        {children}
        </main>
        
        </body>
    </html>
  );
}