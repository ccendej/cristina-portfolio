import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function ContactPage() {
  return (
    <main
  className="min-h-[calc(100vh-78px)] pt-16 pb-24 md:pt-20 md:pb-32"
      style={{
        backgroundColor: "rgba(247, 243, 237, 0.57)",
      }}
    >
      <Container>
        <Eyebrow>Contact</Eyebrow>

        <h1
          className="max-w-4xl text-5xl font-medium tracking-tight md:text-7xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Let&apos;s build something meaningful.
        </h1>

        <p className="mt-10 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
          I&apos;m always interested in thoughtful conversations about
          technology, leadership, community, and meaningful experiences.
        </p>

        <div className="mt-12 flex flex-wrap gap-8">
          <a
            href="mailto:cendejasc@gmail.com"
            className="border-b border-black pb-1 transition-opacity hover:opacity-50"
          >
            Email: CendejasC@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/cristinacendejas"
            target="_blank"
            rel="noreferrer"
            className="border-b border-black pb-1 transition-opacity hover:opacity-50"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/ccendej"
            target="_blank"
            rel="noreferrer"
            className="border-b border-black pb-1 transition-opacity hover:opacity-50"
          >
            GitHub
          </a>
        </div>
      </Container>
    </main>
  );
}