import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";

export default function Hero() {
  return (
    <section  className="bg-[rgba(247,243,237,0.50)] pt-16 pb-24 md:pt-20 md:pb-32">
      <Container>
        <div className="flex min-h-[calc(100vh-78px)] flex-col items-center justify-center text-center">
          
          <Eyebrow>
            Technical Project Manager • Yoga Teacher • Community Builder
          </Eyebrow>

          <h1
            className="mt-7 whitespace-nowrap text-6xl leading-[0.95] tracking-tight text-[var(--text-dark)] md:text-8xl lg:text-[104px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Cristina Cendejas
          </h1>

          <p className="mt-14 max-w-[800px] text-[23px] leading-[1.5] text-[var(--text-soft)] md:text-[27px]">
            Creating environments where people, ideas, and technology come
            together to do their best work.
          </p>

        </div>
      </Container>
    </section>
  );
}