import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Link from "next/link";

export default function Community() {
  return (
    <section className="border-t border-black/10 py-24 md:py-32">
      <Container>
        <Eyebrow>Beyond Technology</Eyebrow>

        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-20">
          <h2
            className="text-4xl leading-tight md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Teaching, mentoring, and bringing people together.
          </h2>

          <div>
            <p className="text-lg leading-8 text-neutral-600">
              My work outside technology has shaped the way I lead within it.
              From five years of mentorship to teaching yoga and exploring
              event planning, I&apos;m continually drawn to creating spaces
              where people can connect and grow.
            </p>

            <Link
              href="/community"
              className="mt-8 inline-block border-b border-black pb-1 transition-opacity hover:opacity-50"
            >
              Explore community work →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}