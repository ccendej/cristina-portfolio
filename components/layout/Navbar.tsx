export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-black/5">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <a
          href="/"
          className="font-medium tracking-tight text-lg hover:opacity-70 transition"
        >
          Cristina Cendejas
        </a>

        <div className="hidden md:flex items-center gap-10 text-sm tracking-wide">

          <a
            href="#work"
            className="transition hover:text-[var(--sage)]"
          >
            Work
          </a>

          <a
            href="#philosophy"
            className="transition hover:text-[var(--sage)]"
          >
            Philosophy
          </a>

          <a
            href="#community"
            className="transition hover:text-[var(--sage)]"
          >
            Community
          </a>

          <a
            href="#contact"
            className="transition hover:text-[var(--sage)]"
          >
            Contact
          </a>

        </div>

      </nav>
    </header>
  );
}