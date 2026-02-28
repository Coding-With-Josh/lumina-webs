import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://luminaweb3.io"),
  title:
    "Lumina Web3: Crypto Marketing Agency. Get a Free Audit Now. Lumina Web3.",
  description:
    "Lumina Web3: A leading crypto marketing agency. Get a free proposal and marketing audit. We specialize in Web3 growth, helping clients raise over $150M.",
  keywords: [
    "crypto marketing",
    "Web3 marketing agency",
    "cryptocurrency marketing solutions",
    "blockchain project marketing",
    "digital marketing for crypto",
    "crypto project proposals",
    "Web3 growth strategies",
    "marketing audits for crypto",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Lumina Web3 - Marketing Agency",
    description: "Lumina Web3 - Marketing Agency",
    siteName: "Lumina Web3",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina Web3 - Marketing Agency",
    description: "Lumina Web3 - Marketing Agency",
    site: "https://x.com/luminaweb3_io",
  },
  icons: {
    icon: [
      {
        url: "https://framerusercontent.com/images/KsnkjkrK1GKinBoWGiPUb0YN054.png",
      },
    ],
    shortcut: [
      {
        url: "https://framerusercontent.com/images/KsnkjkrK1GKinBoWGiPUb0YN054.png",
      },
    ],
    apple: [
      {
        url: "https://framerusercontent.com/images/KsnkjkrK1GKinBoWGiPUb0YN054.png",
      },
    ],
  },
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
        {children}
      </body>
    </html>
  );
}
