import Link from "next/link";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";

export default function Journey() {
  return (
    <section className="bg-[rgba(247,243,237,0.57)] pt-12 pb-14 md:pt-20 md:pb-32">
      <Container>
        <Eyebrow>My Journey</Eyebrow>

        <div className="mt-5 grid gap-8 md:mt-6 md:grid-cols-[1fr_1.1fr] md:gap-20">
          <h2
            className="max-w-3xl text-[34px] leading-[1.05] tracking-tight text-[var(--text-dark)] md:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Curiosity has always shaped where I go next.
          </h2>

          <div>
            <p className="max-w-xl text-base leading-7 text-[var(--text-soft)] md:text-xl md:leading-[1.8]">
              From chemistry labs to five years in technology, my path has been
              shaped by curiosity, challenge, and a desire to keep learning.
            </p>

            <div className="mt-7 flex items-end justify-between gap-8 md:mt-10">
              <Link
                href="/journey"
                className="group inline-flex items-center gap-3 text-base text-[var(--text-dark)]"
              >
                <span className="border-b border-[var(--text-dark)] pb-1">
                  Read my story
                </span>

                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>

              <div className="hidden text-right md:block">
                <p
                  className="text-4xl leading-none text-[var(--accent)]/30"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  05
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[var(--text-soft)]/75">
                  Years in Technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}