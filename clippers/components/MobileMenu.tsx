"use client";

import Link from "next/link";
import { NAV_LINKS, BRAND } from "@/lib/constants";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <>
      <div
        role="presentation"
        className="fixed inset-0 z-[9998] bg-black/60 transition-opacity"
        onClick={onClose}
      />
      <div
        className="fixed top-0 right-0 z-[9999] flex h-full w-[280px] flex-col gap-2 border-l border-white/10 bg-[rgb(8,21,51)] p-10 pt-20 transition-transform"
        style={{ transform: open ? "translateX(0)" : "translateX(100%)" }}
      >
        <button
          type="button"
          aria-label="Close menu"
          className="absolute right-5 top-5 text-2xl text-white"
          onClick={onClose}
        >
          ×
        </button>
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={onClose}
            className="border-b border-white/[0.08] py-3 text-lg text-white/80 no-underline"
          >
            {label}
          </Link>
        ))}
        <Link
          href="/#bookacall"
          onClick={onClose}
          className="mt-6 rounded-[10px] bg-[rgb(80,217,121)] px-6 py-3.5 text-center text-base font-semibold text-[rgb(8,21,51)] no-underline"
        >
          Book a Call
        </Link>
      </div>
    </>
  );
}
