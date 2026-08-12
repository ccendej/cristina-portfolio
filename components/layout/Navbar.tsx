import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-black/10 bg-[#E2D9CE]">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8 lg:px-12">
        <Link
          href="/"
          className="text-xl font-medium text-[var(--text-dark)] transition-opacity hover:opacity-60"
        >
          Cristina
        </Link>

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
      </nav>
    </header>
  );
}