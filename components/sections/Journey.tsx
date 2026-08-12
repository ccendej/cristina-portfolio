import Link from "next/link";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";

export default function Journey() {
  return (
   <section  className="bg-[rgba(247,243,237,0.57)] pt-16 pb-24 md:pt-20 md:pb-32">
      <Container>
        <Eyebrow>My Journey</Eyebrow>

        <div className="mt-6 grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-20">
          <h2
            className="max-w-3xl text-5xl leading-[1.05] tracking-tight text-[var(--text-dark)] md:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Curiosity has always shaped where I go next.
          </h2>

          <div>
            <p className="max-w-xl text-xl leading-[1.8] text-[var(--text-soft)]">
              From chemistry labs to{" "}
              <span className="text-[var(--text-dark)]">
                five years in technology,
              </span>{" "}
              my path has been shaped by curiosity, challenge, and a desire to
              keep learning.
            </p>

            <div className="mt-10 flex items-end justify-between gap-8">
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
                  className="text-5xl leading-none text-[var(--accent)]/60"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  05
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[var(--text-soft)]">
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