import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ORBIT | Personal AI Ecosystem",
  description:
    "A personal AI ecosystem connecting goals, projects, learning, ideas, memory, and personal intelligence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#f5f5f7] text-[#14151a] min-h-screen antialiased selection:bg-indigo-500/15 selection:text-indigo-900 font-sans">
        {children}
      </body>
    </html>
  );
}
