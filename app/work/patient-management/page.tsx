import Link from "next/link";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function PatientManagementPage() {
  return (
    <main className="bg-[var(--porcelain)] pt-16 pb-24 md:pt-20 md:pb-32">
      <Container>
<Link
  href="/work"
  className="mb-12 inline-block text-sm text-[var(--text-soft)] transition-opacity hover:opacity-50"
>
  ← Back to work
</Link>

        <Eyebrow>UX/UI Development</Eyebrow>

        <h1
          className="max-w-5xl text-5xl leading-[1.05] tracking-tight text-[var(--text-dark)] md:text-7xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Translating complex patient workflows into clear digital experiences.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--text-soft)]">
          Partnering with stakeholders on a large patient management module
          supporting admission, discharge, and transfer workflows, then
          translating operational needs into clear requirements for developers.
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
              Patient Management Workflows
            </p>
          </div>

          <div>
            <Eyebrow>Areas</Eyebrow>
            <p className="mt-3 text-[var(--text-dark)]">
              Stakeholder Discovery · Requirements · Developer Collaboration
            </p>
          </div>
        </div>

        <section className="py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.4fr] md:gap-20">
            <Eyebrow>The Project</Eyebrow>

            <div className="max-w-3xl space-y-6 text-lg leading-8 text-[var(--text-soft)]">
              <p>
                The patient management module supported complex admission,
                discharge, and transfer workflows. Building these experiences
                required understanding not only what stakeholders requested,
                but how users moved through each process and what information
                they needed along the way.
              </p>

              <p>
                Each part of the module was connected, so understanding the 
                full patient workflow was important when defining 
                requirements and shaping individual pages.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.4fr] md:gap-20">
            <Eyebrow>My Role</Eyebrow>

            <div className="max-w-3xl space-y-6 text-lg leading-8 text-[var(--text-soft)]">
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

        <section className="py-16 md:py-20">
          <Eyebrow>What I Developed</Eyebrow>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <h2
                className="text-3xl text-[var(--text-dark)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Stakeholder discovery
              </h2>

              <p className="mt-4 leading-7 text-[var(--text-soft)]">
                I learned how to move beyond surface-level requests and uncover
                the actual need behind a feature or page.
              </p>
            </div>

            <div>
              <h2
                className="text-3xl text-[var(--text-dark)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Requirements translation
              </h2>

              <p className="mt-4 leading-7 text-[var(--text-soft)]">
                I translated stakeholder conversations into clear, detailed
                requirements that developers could use to build the experience.
              </p>
            </div>

            <div>
              <h2
                className="text-3xl text-[var(--text-dark)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Workflow thinking
              </h2>

              <p className="mt-4 leading-7 text-[var(--text-soft)]">
                Working across admission, discharge, and transfer processes
                taught me to think about how individual interactions connect
                across a larger system.
              </p>
            </div>

            <div>
              <h2
                className="text-3xl text-[var(--text-dark)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                UX/UI perspective
              </h2>

              <p className="mt-4 leading-7 text-[var(--text-soft)]">
                The work introduced me to user-centered design principles and
                showed me how thoughtful discovery influences the quality of a
                digital product.
              </p>
            </div>
          </div>
        </section>

        <section className="pt-16 md:pt-20">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.4fr] md:gap-20">
            <Eyebrow>Building my PM foundation</Eyebrow>

            <div className="max-w-3xl space-y-6">
              <p
                className="text-3xl leading-tight text-[var(--text-dark)] md:text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                This work became an important bridge into project management.
              </p>

              <p className="text-lg leading-8 text-[var(--text-soft)]">
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