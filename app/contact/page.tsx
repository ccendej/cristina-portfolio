import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-16 pb-20 md:pt-24 md:pb-32">
      <Container>
        <div className="-translate-y-12"></div>
        <Eyebrow>Contact</Eyebrow>

        <h1
          className="max-w-4xl text-5xl md:text-7xl font-medium tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Let&apos;s build something meaningful.
        </h1>

        <p className="mt-10 max-w-2xl text-lg leading-8 ...">
          I'm always interested in thoughtful conversations about
          technology, leadership, community, and meaningful experiences.
        </p>

        <div className="mt-12 flex gap-8">
          <a
             href="mailto:cendejasc@gmail.com"
             className="border-b border-black pb-1">
             Email: CendejasC@gmail.com
         </a>

          <a
            href="https://www.linkedin.com/in/cristinacendejas"
            target="_blank"
            rel="noreferrer"
            className="border-b border-black pb-1">
          LinkedIn
        </a>

          <a
            href="https://github.com/ccendej"
            target="_blank"
            rel="noreferrer"
            className="border-b border-black pb-1"
          >
            GitHub
          </a>
        </div>
      </Container>
    </main>
  );
}