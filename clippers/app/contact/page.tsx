import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Lumina Clippers — Brand Clipping Campaigns",
  description:
    "Get in touch with Lumina Clippers for brand clipping campaigns. We distribute your content across TikTok, Reels, X, and Shorts. Contact us now.",
  keywords: [
    "contact Lumina Clippers",
    "brand clipping services",
    "social media content distribution",
    "campaign launch inquiries",
    "AI product promotion",
    "crypto marketing solutions",
    "book a call Lumina",
    "influencer engagement services",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    url: "/contact",
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
      "Distribute content across TikTok, Reels, X & Shorts with 10k+ clippers. For brands, AI & crypto. #ContentDistribution",
    images: [
      "https://framerusercontent.com/images/49d9V2C17jyhAnna9CVX16sCjZA.png",
    ],
  },
};

export default function Contact() {
    return (
      <main style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
        <iframe
          title="Contact - Lumina Clippers Website"
          src="/contact.html"
          style={{ width: "100%", height: "100%", border: "0" }}
        />
      </main>
    );
  }
  