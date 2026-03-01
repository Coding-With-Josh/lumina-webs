import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Lumina Clippers — Video Clipping Agency",
  description:
    "Lumina Clippers: Content clipping & distribution across TikTok, Reels, X, and Shorts. Built for brands, AI, apps, and crypto. Get started now.",
  keywords: [
    "content clipping",
    "social media marketing",
    "brand visibility",
    "Lumina Clippers",
    "content distribution",
    "AI products",
    "crypto marketing",
    "team members",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: "/about",
    title: "Lumina Clippers — The Clipping Network for Brands",
    description:
      "We mobilize 10,000+ clippers to clip and mass-distribute your content across TikTok, Reels, X, and Shorts. Built for brands, AI products, apps, and crypto.",
    images: [
      {
        url: "https://framerusercontent.com/images/49d9V2C17jyhAnna9CVX16sCjZA.png",
        alt: "Lumina Clippers — The Clipping Network for Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina Clippers — The Clipping Network for Brands",
    description:
      "Reach 10,000+ clippers for mass content distribution across TikTok, Reels, X & Shorts. #ContentClipping",
    images: [
      "https://framerusercontent.com/images/49d9V2C17jyhAnna9CVX16sCjZA.png",
    ],
  },
};

export default function About() {
    return (
      <main style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
        <iframe
          title="About - Lumina Clippers Website"
          src="/about.html"
          style={{ width: "100%", height: "100%", border: "0" }}
        />
      </main>
    );
  }
  