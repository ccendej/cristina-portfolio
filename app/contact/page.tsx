import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function ContactPage() {
  return (
<main
  className="flex min-h-[calc(100svh-78px)] items-center py-10 md:min-h-[calc(100vh-78px)] md:py-20"
  style={{
    backgroundColor: "rgba(247, 243, 237, 0.57)",
  }}
>
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>Contact</Eyebrow>

          <h1
            className="mt-3 text-[40px] font-medium leading-[1.02] tracking-tight text-[#302923] md:mt-4 md:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Let&apos;s build something meaningful.
          </h1>

          <p className="mx-auto mt-6 max-w-[340px] text-base leading-7 text-[var(--text-soft)] md:mt-8 md:max-w-2xl md:text-lg md:leading-8">
            I&apos;m always interested in thoughtful conversations about
            technology, leadership, community, and meaningful experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm md:mt-12 md:gap-x-8 md:gap-y-4">
            <a
              href="mailto:cendejasc@gmail.com"
              className="transition-opacity hover:opacity-60"
            >
              Email: CendejasC@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/cristinacendejas"
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-60"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/ccendej"
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-60"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}