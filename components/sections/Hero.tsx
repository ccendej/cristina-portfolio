import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";

export default function Hero() {
  return (
    <section className="bg-[rgba(247,243,237,0.44)] pt-10 pb-14 md:pt-20 md:pb-32">
      <Container>
        <div className="flex min-h-[68svh] flex-col items-center justify-center text-center md:min-h-[calc(100vh-78px)]">

          <Eyebrow>
            Technical Project Manager • Yoga Teacher • Community Builder
          </Eyebrow>

          <h1
            className="max-w-full text-[40px] leading-[0.98] tracking-tight text-[var(--text-dark)] md:mt-7 md:whitespace-nowrap md:text-8xl lg:text-[104px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Cristina Cendejas
          </h1>

          <p className="mt-6 max-w-[340px] text-base leading-7 text-[var(--text-soft)] md:mt-14 md:max-w-[800px] md:text-[27px] md:leading-[1.5]">
            Creating environments where people, ideas, and technology come
            together to do their best work.
          </p>

        </div>
      </Container>
    </section>
  );
}