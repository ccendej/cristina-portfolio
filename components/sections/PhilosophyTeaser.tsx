import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";

export default function PhilosophyTeaser() {
  return (
    <section  className="bg-[rgba(247,243,237,0.57)] pt-16 pb-24 md:pt-20 md:pb-32">
      <Container>
        <div className="mx-auto max-w-6xl">
          <Eyebrow>What I Believe</Eyebrow>

          <h2
            className="mt-6 max-w-3xl text-4xl leading-[1.08] tracking-tight text-[var(--text-dark)] md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Great work begins with{" "}
            <span className="italic">Trust.</span>
          </h2>

          <a
            href="/philosophy"
            className="mt-7 inline-block text-sm uppercase tracking-[0.18em] text-[var(--olive)]"
          >
            Read my philosophy →
          </a>
        </div>
      </Container>
    </section>
  );
}