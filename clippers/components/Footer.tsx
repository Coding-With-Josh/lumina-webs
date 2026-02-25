"use client";

import Link from "next/link";
import { BRAND, LOGO_URL, FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";

const socialPaths: Record<string, string> = {
  YouTube:
    "M164.44 121.34l-48-32A8 8 0 0 0 104 96v64a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32zM120 145.05V111l25.58 17zM234.33 69.52a24 24 0 0 0-14.49-16.4C185.56 39.88 131 40 128 40s-57.56-.12-91.84 13.12a24 24 0 0 0-14.49 16.4C19.08 79.5 16 97.74 16 128s3.08 48.5 5.67 58.48a24 24 0 0 0 14.49 16.41C69 215.56 120.4 216 127.34 216h1.32c6.94 0 58.37-.44 91.18-13.11a24 24 0 0 0 14.49-16.41c2.59-10 5.67-28.22 5.67-58.48S236.92 79.5 234.33 69.52z",
  Instagram:
    "M128 80a48 48 0 1 0 48 48A48.05 48.05 0 0 0 128 80zm0 80a32 32 0 1 1 32-32A32 32 0 0 1 128 160zM176 24H80A56.06 56.06 0 0 0 24 80v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80A56.06 56.06 0 0 0 176 24zm40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80A40 40 0 0 1 80 40h96a40 40 0 0 1 40 40zM192 76a12 12 0 1 1-12-12 12 12 0 0 1 12 12z",
  WhatsApp:
    "M187.58 144.84l-32-16a8 8 0 0 0-8 .5l-14.69 9.8a40.55 40.55 0 0 1-16-16l9.8-14.69a8 8 0 0 0 .5-8l-16-32A8 8 0 0 0 104 64a40 40 0 0 0-40 40 88.1 88.1 0 0 0 88 88 40 40 0 0 0 40-40 8 8 0 0 0-4.42-7.16z",
  Telegram:
    "M228.88 26.19a9 9 0 0 0-9.16-1.57L17.06 103.93a14.22 14.22 0 0 0 2.43 27.21L72 141.45V200a15.92 15.92 0 0 0 10 14.83 15.91 15.91 0 0 0 17.51-3.73l25.32-26.26L165 220a15.88 15.88 0 0 0 10.51 4 16.3 16.3 0 0 0 5-.79 15.85 15.85 0 0 0 10.67-11.63L231.77 35a9 9 0 0 0-2.89-8.81z",
  X: "M214.75 211.71l-62.6-98.38 61.77-67.95a8 8 0 0 0-11.84-10.76L143.24 99.34 102.75 35.71A8 8 0 0 0 96 32H48a8 8 0 0 0-6.75 12.3l62.6 98.37-61.77 68a8 8 0 1 0 11.84 10.76l58.84-64.72 40.49 63.63A8 8 0 0 0 160 224h48a8 8 0 0 0 6.75-12.29z",
  LinkedIn:
    "M216 24H40A16 16 0 0 0 24 40v216a16 16 0 0 0 16 16h216a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16zm0 192H40V40h216v216zM96 112v64a8 8 0 0 1-16 0V112a8 8 0 0 1 16 0zm88 28v36a8 8 0 0 1-16 0V140a20 20 0 0 0-40 0v36a8 8 0 0 1-16 0V112a8 8 0 0 1 15.79-1.78A36 36 0 0 1 184 140zM100 84A12 12 0 1 1 88 72a12 12 0 0 1 12 12z",
};

export function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        background:
          "radial-gradient(83% 50% at 44% 111.5%, rgb(0,14,71) 0%, rgb(0,0,0) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-5 py-8 md:px-10">
        <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-[rgb(18,20,38)] pb-6">
          <Link href="/" className="flex items-center gap-2">
            <img
              src={LOGO_URL}
              alt=""
              className="h-8 w-8 object-contain object-left"
            />
            <span className="text-base font-medium text-white">
              Lumina Clippers
            </span>
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            {FOOTER_LINKS.map(({ href, label }, i) => (
              <span key={href} className="flex items-center gap-2">
                {i > 0 && (
                  <span
                    className="h-4 w-px bg-[rgb(18,20,38)]"
                  />
                )}
                <Link
                  href={href}
                  className="text-[15px] text-white/90 transition hover:text-white"
                >
                  {label}
                </Link>
              </span>
            ))}
            <span className="mx-2 h-4 w-px bg-[rgb(18,20,38)]" />
            <Link
              href="/#bookacall"
              className="rounded-[10px] px-4 py-2 text-[15px] font-medium text-white transition hover:opacity-95"
              style={{ backgroundColor: BRAND.green }}
            >
              Book A Call
            </Link>
          </div>
        </nav>
        <div className="flex flex-col items-center justify-between gap-4 pt-6 md:flex-row">
          <p className="text-[15px] text-white/80">© 2025 — Copyright</p>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/20 bg-white/[0.08] transition hover:opacity-90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="h-5 w-5 shrink-0"
                  fill={BRAND.green}
                  aria-hidden
                >
                  <path d={socialPaths[label] ?? socialPaths.X} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div
        className="h-px w-full opacity-[0.14]"
        style={{
          background: `radial-gradient(63.67% 63.67% at 50% 50%, ${BRAND.green} 0%, rgb(0,0,0) 100%)`,
        }}
      />
    </footer>
  );
}
