"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-black/10 bg-[#E2D9CE]">
      <nav className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-medium text-[var(--text-dark)] transition-opacity hover:opacity-60"
            onClick={() => setIsOpen(false)}
          >
            Cristina
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 text-sm md:flex">
            <Link
              href="/work"
              className="text-[var(--text-dark)] transition-opacity hover:opacity-60"
            >
              Work
            </Link>

            <Link
              href="/philosophy"
              className="text-[var(--text-dark)] transition-opacity hover:opacity-60"
            >
              Philosophy
            </Link>

            <Link
              href="/community"
              className="text-[var(--text-dark)] transition-opacity hover:opacity-60"
            >
              Community
            </Link>

            <Link
              href="/contact"
              className="text-[var(--text-dark)] transition-opacity hover:opacity-60"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="text-sm text-[var(--text-dark)] transition-opacity hover:opacity-60 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="border-t border-black/10 py-6 md:hidden">
            <div className="flex flex-col gap-5 text-sm">
              <Link
                href="/work"
                onClick={() => setIsOpen(false)}
                className="text-[var(--text-dark)] transition-opacity hover:opacity-60"
              >
                Work
              </Link>

              <Link
                href="/philosophy"
                onClick={() => setIsOpen(false)}
                className="text-[var(--text-dark)] transition-opacity hover:opacity-60"
              >
                Philosophy
              </Link>

              <Link
                href="/community"
                onClick={() => setIsOpen(false)}
                className="text-[var(--text-dark)] transition-opacity hover:opacity-60"
              >
                Community
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-[var(--text-dark)] transition-opacity hover:opacity-60"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}