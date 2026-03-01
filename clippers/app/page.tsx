import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lumina Clippers: Content Clipping & Distribution for Brands",
  description:
    "Lumina Clippers: Content clipping & distribution for brands across TikTok, Reels, X, & Shorts. Book a consultation.",
  keywords: [
    "content clipping",
    "social media distribution",
    "brand awareness",
    "TikTok marketing",
    "Reels promotion",
    "X platform engagement",
    "Shorts content strategy",
    "AI product marketing",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
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
      "Distribute content across TikTok, Reels & more with 10,000+ clippers. For brands, AI & crypto. #ContentDistribution",
    images: [
      "https://framerusercontent.com/images/49d9V2C17jyhAnna9CVX16sCjZA.png",
    ],
  },
};

export default function Home() {
  return (
    <main style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <iframe
        title="Lumina Clippers Website"
        src="/lumina.html"
        style={{ width: "100%", height: "100%", border: "0" }}
      />
    </main>
  );
}
