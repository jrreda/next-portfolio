import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Modern Developer Portfolio",
  description: "A modern portfolio showcasing my work, experience, and interests in web development and technology.",
  keywords: ["portfolio", "developer", "web development", "next.js", "react"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Portfolio | Modern Developer Portfolio",
    description: "A modern portfolio showcasing my work, experience, and interests.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Modern Developer Portfolio",
    description: "A modern portfolio showcasing my work, experience, and interests.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  }
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
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
