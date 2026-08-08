import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center py-32">
      <Container>
        <Eyebrow>Contact</Eyebrow>

        <h1
          className="max-w-4xl text-5xl md:text-7xl font-medium tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Let&apos;s build something meaningful.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
          I&apos;m always interested in thoughtful conversations about
          technology, leadership, community, and meaningful experiences.
        </p>

        <div className="mt-12 flex gap-8">
          <a href="mailto:YOUR_EMAIL" className="border-b border-black pb-1">
            Email
          </a>

          <a
            href="YOUR_LINKEDIN_URL"
            target="_blank"
            rel="noreferrer"
            className="border-b border-black pb-1"
          >
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