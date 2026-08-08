import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[var(--background)]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8 lg:px-12">
        <Link
          href="/"
          className="text-lg font-medium tracking-tight transition-opacity hover:opacity-60"
        >
          Cristina
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 text-sm md:flex">
          <Link
            href="/work"
            className="transition-opacity hover:opacity-50"
          >
            Work
          </Link>

          <Link
            href="/philosophy"
            className="transition-opacity hover:opacity-50"
          >
            Philosophy
          </Link>

          <Link
            href="/community"
            className="transition-opacity hover:opacity-50"
          >
            Community
          </Link>

          <Link
            href="/contact"
            className="transition-opacity hover:opacity-50"
          >
            Contact
          </Link>
        </div>

        {/* Mobile navigation */}
        <Link
          href="/contact"
          className="text-sm transition-opacity hover:opacity-50 md:hidden"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}