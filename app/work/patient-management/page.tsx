import Link from "next/link";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function PatientManagementPage() {
  return (
    <main className="bg-[rgba(247,243,237,0.56)] pt-12 pb-16 md:pt-20 md:pb-32">
      <Container>
        <Link
          href="/work"
          className="mb-8 inline-block text-sm text-[var(--text-soft)] transition-opacity hover:opacity-50 md:mb-12"
        >
          ← Back to work
        </Link>

        <Eyebrow>UX/UI Development</Eyebrow>

        <h1
          className="max-w-5xl text-[36px] leading-[1.05] tracking-tight text-[var(--text-dark)] md:text-7xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Translating complex patient workflows into clear digital experiences.
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-7 text-[var(--text-soft)] md:mt-8 md:text-xl md:leading-9">
          Partnering with stakeholders on a large patient management module
          supporting admission, discharge, and transfer workflows, then
          translating operational needs into clear requirements for developers.
        </p>

        <p className="mt-5 max-w-3xl text-sm italic leading-6 text-[var(--text-soft)] md:mt-6">
          Certain project details have been generalized to protect internal
          systems and organizational information.
        </p>

        {/* PROJECT DETAILS */}
        <div className="mt-12 grid gap-6 border-y border-[var(--accent)]/25 py-8 md:mt-16 md:grid-cols-3 md:gap-10 md:py-10">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-soft)]">
              Role
            </p>

            <p className="mt-2 text-base leading-7 text-[var(--text-dark)]">
              IT Analyst II
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-soft)]">
              Focus
            </p>

            <p className="mt-2 text-base leading-7 text-[var(--text-dark)]">
              Patient Management Workflows
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-soft)]">
              Areas
            </p>

            <p className="mt-2 text-base leading-7 text-[var(--text-dark)]">
              Stakeholder Discovery · Requirements · Developer Collaboration
            </p>
          </div>
        </div>

        {/* THE PROJECT */}
        <section className="py-8 md:py-20">
          <div className="grid gap-6 md:grid-cols-[0.8fr_1.4fr] md:gap-20">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-soft)]">
              The Project
            </p>

            <div className="max-w-3xl space-y-5 text-base leading-7 text-[var(--text-soft)] md:space-y-6 md:text-lg md:leading-8">
              <p>
                The patient management module supported complex admission,
                discharge, and transfer workflows. Building these experiences
                required understanding not only what stakeholders requested,
                but how users moved through each process and what information
                they needed along the way.
              </p>

              <p>
                Each part of the module was connected, so understanding the full
                patient workflow was important when defining requirements and
                shaping individual pages.
              </p>
            </div>
          </div>
        </section>

        {/* MY ROLE */}
        <section className="border-t border-[var(--accent)]/15 py-8 md:py-20">
          <div className="grid gap-6 md:grid-cols-[0.8fr_1.4fr] md:gap-20">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-soft)]">
              My Role
            </p>

            <div className="max-w-3xl space-y-5 text-base leading-7 text-[var(--text-soft)] md:space-y-6 md:text-lg md:leading-8">
              <p>
                I partnered directly with stakeholders to understand their
                operational needs and translate those needs into detailed
                requirements developers could use to build and refine pages.
              </p>

              <p>
                I learned to ask increasingly specific questions — not simply
                what someone wanted on a page, but why they needed it, how it
                would be used, what information was required, and how the
                request fit into the broader workflow.
              </p>

              <p>
                My attention to detail became especially important when
                documenting those requirements so developers had enough clarity
                to move forward.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT I DEVELOPED */}
        <section className="border-t border-[var(--accent)]/15 py-8 md:py-20">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-soft)]">
            What I Developed
          </p>

          <div className="mt-7 grid gap-10 md:mt-10 md:grid-cols-2">
            <div>
              <h2
                className="text-[28px] leading-tight text-[var(--text-dark)] md:text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Stakeholder discovery
              </h2>

              <p className="mt-4 text-base leading-7 text-[var(--text-soft)]">
                I learned how to move beyond surface-level requests and uncover
                the actual need behind a feature or page.
              </p>
            </div>

            <div>
              <h2
                className="text-[28px] leading-tight text-[var(--text-dark)] md:text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Requirements translation
              </h2>

              <p className="mt-4 text-base leading-7 text-[var(--text-soft)]">
                I translated stakeholder conversations into clear, detailed
                requirements that developers could use to build the experience.
              </p>
            </div>

            <div>
              <h2
                className="text-[28px] leading-tight text-[var(--text-dark)] md:text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Workflow thinking
              </h2>

              <p className="mt-4 text-base leading-7 text-[var(--text-soft)]">
                Working across admission, discharge, and transfer processes
                taught me to think about how individual interactions connect
                across a larger system.
              </p>
            </div>

            <div>
              <h2
                className="text-[28px] leading-tight text-[var(--text-dark)] md:text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                UX/UI perspective
              </h2>

              <p className="mt-4 text-base leading-7 text-[var(--text-soft)]">
                The work introduced me to user-centered design principles and
                showed me how thoughtful discovery influences the quality of a
                digital product.
              </p>
            </div>
          </div>
        </section>

        {/* BUILDING MY PM FOUNDATION */}
        <section className="border-t border-[var(--accent)]/15 pt-8 md:pt-20">
          <div className="grid gap-6 md:grid-cols-[0.8fr_1.4fr] md:gap-20">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-soft)]">
              Building My PM Foundation
            </p>

            <div className="max-w-3xl space-y-5 md:space-y-6">
              <p
                className="text-[28px] leading-tight text-[var(--text-dark)] md:text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                This work became an important bridge into project management.
              </p>

              <p className="text-base leading-7 text-[var(--text-soft)] md:text-lg md:leading-8">
                Working between stakeholders and developers taught me how to
                listen for what people actually need, translate between
                technical and nontechnical perspectives, and create enough
                clarity for a team to move forward. Those skills became
                foundational to the way I lead technical projects today.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}