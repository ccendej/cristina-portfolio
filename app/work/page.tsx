import Link from "next/link";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function WorkPage() {
  return (
    <main className="bg-[var(--porcelain)] pt-16 pb-24 md:pt-20 md:pb-32">
      <Container>
        <Eyebrow>Selected Work</Eyebrow>

        <h1
          className="max-w-5xl text-5xl leading-[1.05] tracking-tight text-[var(--text-dark)] md:text-7xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Building better systems through people, process, and technology.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--text-soft)]">
          A selection of projects that show how I bring structure to complex
          work, collaborate across teams, and move technical projects forward.
        </p>

        <div className="mt-20">
          <article className="border-t border-[var(--accent)]/25 py-12 md:py-16">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
              Application Modernization
            </p>

            <div className="mt-6 grid gap-10 md:grid-cols-[1.4fr_0.8fr] md:gap-20">
              <div>
                <h2
                  className="max-w-3xl text-4xl leading-tight text-[var(--text-dark)] md:text-5xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Bringing structure and momentum to a critical system
                  migration.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
                  Leading cross-functional coordination, testing,
                  documentation, and delivery for the modernization of a
                  centralized payment application.
                </p>

                <Link
                  href="/work/payment-modernization"
                  className="mt-8 inline-block border-b border-[var(--text-dark)] pb-1 text-sm transition-opacity hover:opacity-50"
                >
                  View project →
                </Link>
              </div>

              <div className="md:pt-2">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                  Focus
                </p>

                <div className="mt-5 space-y-3 text-sm text-[var(--text-soft)]">
                  <p>Technical Project Management</p>
                  <p>Application Modernization</p>
                  <p>Cross-Functional Leadership</p>
                  <p>QA &amp; Testing</p>
                  <p>Vendor Coordination</p>
                </div>
              </div>
            </div>
          </article>
          <article className="border-t border-[var(--accent)]/25 py-12 md:py-16">
  <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
    UX/UI Development
  </p>

  <div className="mt-6 grid gap-10 md:grid-cols-[1.4fr_0.8fr] md:gap-20">
    <div>
      <h2
        className="max-w-3xl text-4xl leading-tight text-[var(--text-dark)] md:text-5xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Translating complex patient workflows into clear digital experiences.
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
        Partnered with stakeholders on a large patient management module
        supporting admission, discharge, and transfer workflows, translating
        operational needs into detailed requirements developers could use to
        build and refine the user experience.
      </p>

      <Link
         href="/work/patient-management"
        className="mt-8 inline-block border-b border-[var(--text-dark)] pb-1 text-sm transition-opacity hover:opacity-50"
      >
        View project →
      </Link>
    </div>

    <div className="md:pt-2">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
        Focus
      </p>

      <div className="mt-5 space-y-3 text-sm text-[var(--text-soft)]">
        <p>Stakeholder Discovery</p>
        <p>Requirements Gathering</p>
        <p>Workflow Analysis</p>
        <p>UI/UX</p>
        <p>Requirements Documentation</p>
        <p>Developer Collaboration</p>
      </div>
    </div>
  </div>
</article>
<article className="border-t border-[var(--accent)]/25 py-12 md:py-16">
 <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
  Electronic Data Interchange
</p>

  <div className="mt-6 grid gap-10 md:grid-cols-[1.4fr_0.8fr] md:gap-20">
    <div>
      <h2
        className="max-w-3xl text-4xl leading-tight text-[var(--text-dark)] md:text-5xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Building technical expertise in a critical data exchange system.
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-soft)]">
        Took ownership of complex electronic data interchange processes
        supporting provider payment workflows, troubleshooting data failures,
        validating file processing, and helping ensure critical records moved
        accurately between systems.
      </p>

      <Link
        href="/work/electronic-data-interchange"
        className="mt-8 inline-block border-b border-[var(--text-dark)] pb-1 text-sm transition-opacity hover:opacity-50"
      >
        View project →
      </Link>
    </div>

    <div className="md:pt-2">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
        Focus
      </p>

      <div className="mt-5 space-y-3 text-sm text-[var(--text-soft)]">
        <p>Electronic Data Interchange</p>
        <p>Technical Troubleshooting</p>
        <p>Data Validation</p>
        <p>File Processing</p>
        <p>Provider Support</p>
      </div>
    </div>
  </div>
</article>
        </div>
      </Container>
    </main>
  );
}