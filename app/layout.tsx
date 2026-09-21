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
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#090a0d] text-[#f3f4f6] min-h-screen antialiased selection:bg-sky-500/20 selection:text-sky-200">
        {children}
      </body>
    </html>
  );
}
