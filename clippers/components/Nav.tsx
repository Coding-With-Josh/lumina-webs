"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BRAND, LOGO_URL, NAV_LINKS } from "@/lib/constants";
import { MobileMenu } from "./MobileMenu";

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full backdrop-blur-[8px]"
        style={{
          background:
            "linear-gradient(180deg, rgb(0,0,0) -50%, rgba(0,0,0,0) 170%)",
        }}
      >
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:px-10">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded">
              <Image
                src={LOGO_URL}
                alt=""
                fill
                className="object-contain object-left"
                unoptimized
              />
            </div>
            <span className="text-lg font-medium text-white">
              Lumina Clippers
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[15px] transition hover:opacity-90"
                style={{ color: BRAND.navLink }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/#bookacall"
              className="rounded-[10px] px-5 py-2.5 text-[15px] font-medium text-white transition hover:opacity-95"
              style={{
                backgroundColor: BRAND.green,
                boxShadow: `${BRAND.greenGlow} 0px 8px 40px 0px`,
              }}
            >
              Book A Call
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            className="flex flex-col gap-1 rounded p-2 md:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <span className="h-0.5 w-5 rounded-full bg-white" />
            <span className="h-0.5 w-5 rounded-full bg-white" />
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
