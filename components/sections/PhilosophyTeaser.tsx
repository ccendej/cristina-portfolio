import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";

export default function PhilosophyTeaser() {
  return (
<section
  id="philosophy"
  className="border-t border-black/10 bg-[#E2D9CE] py-14 md:py-16"
>
      <Container>
        <div className="text-center">
          <Eyebrow>What I Believe</Eyebrow>
<h2
  className="text-center text-4xl leading-tight text-[#302923] md:text-5xl lg:text-6xl"
  style={{ fontFamily: "var(--font-heading)" }}
>
  Great work begins with <em>Trust.</em>
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