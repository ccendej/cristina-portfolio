import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";

export default function Community() {
  return (
    <section
      className="border-t border-[var(--accent)]/20 py-14 md:py-16"
      style={{
        backgroundColor: "rgba(247, 243, 237, 0.58)",
      }}
    >
      <Container>
        <Eyebrow>Beyond Technology</Eyebrow>

        <div className="mt-6 grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-20">
          <h2
            className="max-w-3xl text-5xl leading-[1.05] tracking-tight text-[var(--text-dark)] md:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Leadership beyond the workplace.
          </h2>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-[var(--text-dark)]/75">
              Teaching yoga and five years of mentoring have shaped how I
              listen, communicate, and create space for others to grow. I&apos;m
              continuing to develop as an instructor while exploring new ways
              to bring people together through community and events.
            </p>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              <span>Teaching</span>
              <span aria-hidden="true">·</span>
              <span>Mentorship</span>
              <span aria-hidden="true">·</span>
              <span>Community</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}