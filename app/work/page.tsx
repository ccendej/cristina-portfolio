import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <Container>
        <Eyebrow>Selected Work</Eyebrow>

        <h1
          className="text-5xl md:text-7xl font-medium tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Building better systems through people, process, and technology.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
          A collection of projects that reflect how I approach technical
          delivery, collaboration, problem solving, and continuous improvement.
        </p>

        <div className="mt-24 space-y-16">
          <article className="border-t border-black/10 pt-8">
            <p className="text-sm text-neutral-500">
              Technical Project Management
            </p>

            <h2
              className="mt-3 text-3xl md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Improving digital products and developer workflows
            </h2>

            <p className="mt-4 max-w-2xl text-neutral-600 leading-7">
              Case study coming soon.
            </p>
          </article>

          <article className="border-t border-black/10 pt-8">
            <p className="text-sm text-neutral-500">
              Troubleshooting & Product Support
            </p>

            <h2
              className="mt-3 text-3xl md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Creating clarity between users and technical teams
            </h2>

            <p className="mt-4 max-w-2xl text-neutral-600 leading-7">
              Case study coming soon.
            </p>
          </article>
        </div>
      </Container>
    </main>
  );
}