import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lumina Clippers Case Studies: See How We Drive Views for Brands",
  description:
    "Lumina Clippers: Drive views & engagement with our case studies. We create high-impact content for TikTok, Reels, X, & Shorts. See how we help brands grow.",
  keywords: [
    "content distribution",
    "video marketing",
    "social media engagement",
    "case studies",
    "brand visibility",
    "Lumina Clippers",
    "video content creation",
    "social media strategy",
  ],
  alternates: {
    canonical: "/casestudies",
  },
  openGraph: {
    type: "website",
    url: "/casestudies",
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
      "Boost brand visibility with 10,000+ clippers! Mass-distribute content across TikTok, Reels, X & Shorts. #ContentDistribution",
    images: [
      "https://framerusercontent.com/images/49d9V2C17jyhAnna9CVX16sCjZA.png",
    ],
  },
};

export default function CaseStudies() {
    return (
      <main style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
        <iframe
          title="Case Studies - Lumina Clippers Website"
          src="/casestudies.html"
          style={{ width: "100%", height: "100%", border: "0" }}
        />
      </main>
    );
  }
  