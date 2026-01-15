import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LuxeMisu | Premium Tiramisu Café",
  description: "India's first Tiramisu-focused café in Kalyan Nagar, Bengaluru.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://www.instagram.com" />
        <link rel="preconnect" href="https://scontent.cdninstagram.com" />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        playfair.variable,
        lato.variable
      )}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Script
          src="//www.instagram.com/embed.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
