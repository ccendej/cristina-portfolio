import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";

export default function Hero() {
  return (
<section className="min-h-[calc(100vh-88px)] bg-[var(--porcelain)]">
  <Container>
    <div className="pt-28 md:pt-32">
          <Eyebrow>
            Technical Project Manager • Yoga Teacher • Community Builder
          </Eyebrow>

          <h1
            className="mt-6 max-w-4xl text-6xl leading-[0.95] tracking-tight text-[var(--text-dark)] md:text-8xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Cristina Cendejas
          </h1>

          <p className="mt-10 max-w-[850px] text-[25px] leading-[1.45] text-[var(--text-soft)] md:text-[27px]">
           Creating environments where people, ideas, and technology come
          together to do their best work.
          </p>

          <div className="mt-16 flex items-center gap-3 text-sm text-[var(--olive)]">
            <span className="text-lg">↓</span>
            <span className="uppercase tracking-[0.2em]">
              Explore
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}