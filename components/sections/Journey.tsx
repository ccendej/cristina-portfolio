import Link from "next/link";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";

export default function Journey() {
  return (
    <section className="bg-[var(--cream)] py-24 md:py-32">
      <Container>
        <Eyebrow>My Journey</Eyebrow>

        <div className="mt-6 grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-20">
          <h2
            className="max-w-3xl text-5xl leading-[1.05] tracking-tight md:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Curiosity has always shaped where I go next.
          </h2>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-[var(--taupe)]">
              From chemistry labs to five years working across technology roles,
              my path has been shaped by curiosity, challenge, and a desire to
              keep learning.
            </p>

            <Link
              href="/journey"
              className="mt-8 inline-block border-b border-[var(--espresso)] pb-1 text-[var(--espresso)] transition-opacity hover:opacity-50"
            >
              Read my story →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}