import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-[var(--cream)]">
      <Container>
        <div className="max-w-5xl">
          <Eyebrow>
            Technical Project Manager • Yoga Teacher • Community Builder
          </Eyebrow>

          <h1
            className="mt-6 max-w-4xl text-6xl leading-[0.95] tracking-tight md:text-8xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Cristina Cendejas
          </h1>

          <p className="mt-10 max-w-3xl text-xl leading-9 text-[var(--taupe)] md:text-2xl">
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