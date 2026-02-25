// Design tokens from original Framer export (pixel-accurate rebuild)
export const BRAND = {
  green: "rgb(80, 217, 121)",
  greenHex: "#50d979",
  greenGlow: "rgba(0, 255, 128, 0.5)",
  darkBg: "rgb(0, 0, 0)",
  navLink: "rgba(230, 236, 255, 0.6)",
  divider: "rgb(18, 20, 38)",
} as const;

export const LOGO_URL =
  "https://framerusercontent.com/images/dvoyd8VR77Y3RUHCGPJlApIPjo.png";

export const NAV_LINKS = [
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
  { href: "/casestudies", label: "Case Studies" },
] as const;

export const FOOTER_LINKS = [
  { href: "/casestudies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
  { href: "/#faqs", label: "FAQ" },
] as const;

export const SOCIAL_LINKS = [
  { href: "https://www.youtube.com/@luminaclippers", label: "YouTube" },
  { href: "https://www.instagram.com/luminaclippers", label: "Instagram" },
  { href: "https://wa.me/message/E4VQ3XK4I62NN1", label: "WhatsApp" },
  { href: "https://t.me/Reeceweb3", label: "Telegram" },
  { href: "https://x.com/Cryptoclippers", label: "X" },
  { href: "https://www.linkedin.com/company/luminaclippers", label: "LinkedIn" },
] as const;
