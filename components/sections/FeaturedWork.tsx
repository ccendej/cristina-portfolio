import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";

export default function FeaturedWork() {
  return (
    <section id="work" className="border-t border-black/10 py-24 md:py-32">
      <Container>
        <Eyebrow>Selected Work</Eyebrow>

        <h2
          className="max-w-4xl text-4xl leading-tight md:text-6xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Leading technical work by creating clarity, trust, and momentum.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
          I work closely with developers to deliver web applications, support
          testing, troubleshoot issues, and reduce friction that can pull
          engineering teams away from higher-value work.
        </p>

        <div className="mt-20 space-y-16">
          <article className="border-t border-black/10 pt-8">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
              Project Leadership
            </p>

            <h3
              className="mt-4 text-3xl md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Coordinating web application delivery
            </h3>

            <p className="mt-5 max-w-2xl leading-7 text-neutral-600">
              Partnering with developers and stakeholders to keep technical work
              aligned, remove blockers, and maintain progress from planning
              through delivery.
            </p>
          </article>

          <article className="border-t border-black/10 pt-8">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
              Testing & Troubleshooting
            </p>

            <h3
              className="mt-4 text-3xl md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Protecting developer focus
            </h3>

            <p className="mt-5 max-w-2xl leading-7 text-neutral-600">
              Supporting testing and investigating support issues before they
              reach developers, helping the team spend more time building and
              less time sorting through avoidable interruptions.
            </p>
          </article>

          <article className="border-t border-black/10 pt-8">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
              Collaboration
            </p>

            <h3
              className="mt-4 text-3xl md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Building trust with technical teams
            </h3>

            <p className="mt-5 max-w-2xl leading-7 text-neutral-600">
              I focus on relationships first. Creating trust makes it easier for
              developers to surface concerns, challenge assumptions, and work
              collaboratively toward faster resolutions.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}