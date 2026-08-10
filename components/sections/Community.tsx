import Link from "next/link";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";

export default function Community() {
  return (
    <section className="bg-[var(--espresso)] py-24 md:py-32">
      <Container>
        <Eyebrow>Beyond Technology</Eyebrow>

        <div className="mt-6 grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-20">
          <h2
            className="max-w-3xl text-5xl leading-[1.05] tracking-tight text-[var(--cream)] md:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Leadership beyond the workplace.
          </h2>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-[var(--sand)]">
              Teaching yoga and five years of mentoring have shaped how I
              listen, communicate, and create space for others to grow. I&apos;m
              continuing to develop as an instructor while exploring new ways
              to bring people together through community and events.
            </p>

            <Link
              href="/community"
              className="mt-8 inline-block border-b border-[var(--sand)] pb-1 text-[var(--cream)] transition-opacity hover:opacity-60"
            >
              More beyond technology →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}