import Link from "next/link";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function ElectronicDataInterchangePage() {
  return (
    <main className="bg-[var(--porcelain)] pt-16 pb-24 md:pt-20 md:pb-32">
      <Container>
        <Link
          href="/work"
          className="mb-12 inline-block text-sm text-[var(--text-soft)] transition-opacity hover:opacity-50"
        >
          ← Back to work
        </Link>

        <Eyebrow>Electronic Data Interchange</Eyebrow>

        <h1
          className="max-w-5xl text-5xl leading-[1.05] tracking-tight text-[var(--text-dark)] md:text-7xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Building technical expertise in a critical data exchange system.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--text-soft)]">
          Taking ownership of complex electronic data interchange processes
          supporting provider payment workflows, with a focus on
          troubleshooting, validation, and reliable file processing.
        </p>

        <p className="mt-6 max-w-3xl text-sm italic leading-6 text-[var(--text-soft)]">
          Certain project details have been generalized to protect internal
          systems and organizational information.
        </p>

        <div className="mt-16 grid gap-10 border-y border-[var(--accent)]/25 py-10 md:grid-cols-3">
          <div>
            <Eyebrow>Role</Eyebrow>
            <p className="mt-3 text-[var(--text-dark)]">
             IT Analyst II
            </p>
          </div>

          <div>
            <Eyebrow>Focus</Eyebrow>
            <p className="mt-3 text-[var(--text-dark)]">
              Electronic Data Interchange
            </p>
          </div>

          <div>
            <Eyebrow>Areas</Eyebrow>
            <p className="mt-3 text-[var(--text-dark)]">
              Troubleshooting · Validation · File Processing
            </p>
          </div>
        </div>

        <section className="py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.4fr] md:gap-20">
            <Eyebrow>The Challenge</Eyebrow>

            <div className="max-w-3xl space-y-6 text-lg leading-8 text-[var(--text-soft)]">
              <p>
  I was introduced to electronic data interchange early in my career,
  learning the system alongside an experienced subject-matter expert who
  gave me a strong technical foundation. As I developed a deeper
  understanding of the processes and how the pieces connected, I became
  prepared to take ownership of the work independently.
</p>

<p>
  The system was technically complex and required careful monitoring,
  testing, and troubleshooting to ensure records processed correctly
  through workflows supporting provider payments.
</p>

<p className="font-medium text-[var(--text-dark)]">
  I was drawn to the complexity and the challenge of understanding the
  system well enough to recognize, investigate, and resolve problems.
</p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.4fr] md:gap-20">
            <Eyebrow>Taking Ownership</Eyebrow>

            <div className="max-w-3xl space-y-6 text-lg leading-8 text-[var(--text-soft)]">
              <p>
                I began learning the environment as an intern and, within
                months, transitioned into a full-time analyst role. As the
                existing subject-matter expert departed, I took on increasing
                responsibility for the EDI processes I had been learning.
              </p>

              <p>
                The experience required me to become comfortable investigating
                unfamiliar problems, understanding how information moved
                between systems, and determining where a failure had occurred
                before deciding what needed to happen next.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <Eyebrow>Technical Work</Eyebrow>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <h2
                className="text-3xl text-[var(--text-dark)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Investigating processing failures
              </h2>

              <p className="mt-4 leading-7 text-[var(--text-soft)]">
                I investigated files that did not load or process as expected,
                including composite failures, processing errors, and translation
                errors.
              </p>
            </div>

            <div>
              <h2
                className="text-3xl text-[var(--text-dark)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Validating data movement
              </h2>

              <p className="mt-4 leading-7 text-[var(--text-soft)]">
                I performed validation and duplication checks to help confirm
                records were processing correctly and identify issues that
                required further investigation.
              </p>
            </div>

            <div>
              <h2
                className="text-3xl text-[var(--text-dark)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Supporting system operations
              </h2>

              <p className="mt-4 leading-7 text-[var(--text-soft)]">
                My responsibilities included supporting day-to-day system
                operations, troubleshooting access issues, and working across
                mainframe and file-processing workflows.
              </p>
            </div>

            <div>
              <h2
                className="text-3xl text-[var(--text-dark)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Communicating impact
              </h2>

              <p className="mt-4 leading-7 text-[var(--text-soft)]">
                When processing issues affected expected timelines, I helped
                communicate delays and provide visibility while technical
                issues were investigated and resolved.
              </p>
            </div>
          </div>
        </section>

        <section className="pt-16 md:pt-20">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.4fr] md:gap-20">
            <Eyebrow>What I Took From It</Eyebrow>

            <div className="max-w-3xl space-y-6">
              <p
                className="text-3xl leading-tight text-[var(--text-dark)] md:text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                This experience built the technical foundation for the work I
                do today.
              </p>

              <p className="text-lg leading-8 text-[var(--text-soft)]">
                Learning a complex system taught me to stay curious, investigate
                problems methodically, and understand what is happening beneath
                the surface before looking for a solution. Those habits followed
                me into UX/UI work and eventually into technical project
                management.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}