import Link from "next/link";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function PaymentModernizationPage() {
  return (
    <main className="bg-[var(--porcelain)] pt-16 pb-24 md:pt-20 md:pb-32">
      <Container>

        <Link
          href="/work"
          className="mb-12 inline-block text-sm text-[var(--text-soft)] transition-opacity hover:opacity-50"
        >
          ← Back to work
        </Link>

        <Eyebrow>Application Modernization</Eyebrow>

        <h1
          className="max-w-5xl text-5xl leading-[1.05] tracking-tight text-[var(--text-dark)] md:text-7xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Bringing structure and momentum to a critical system migration.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--text-soft)]">
          Helping lead the modernization of a centralized payment application
          while strengthening collaboration across development, vendors, QA,
          and dependent source-system teams.
        </p>

        <p className="mt-6 max-w-3xl text-sm italic leading-6 text-[var(--text-soft)]">
          Certain project details have been generalized to protect internal
          systems and organizational information.
        </p>

        <div className="mt-16 grid gap-10 border-y border-[var(--accent)]/25 py-10 md:grid-cols-3">
          <div>
            <Eyebrow>Role</Eyebrow>
            <p className="mt-3 text-[var(--text-dark)]">
              Technical Project Manager
            </p>
          </div>

          <div>
            <Eyebrow>Focus</Eyebrow>
            <p className="mt-3 text-[var(--text-dark)]">
              Application Modernization
            </p>
          </div>

          <div>
            <Eyebrow>Areas</Eyebrow>
            <p className="mt-3 text-[var(--text-dark)]">
              Testing · Documentation · Cross-Team Delivery
            </p>
          </div>
        </div>

        <section className="py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.4fr] md:gap-20">
            <Eyebrow>The Challenge</Eyebrow>

            <div className="max-w-3xl space-y-6 text-lg leading-8 text-[var(--text-soft)]">
              <p>
                The modernization effort had been underway for several years
                before I joined the project, with an approaching end-of-life
                milestone creating additional urgency.
              </p>

              <p>
                Progress was limited by unclear ownership, gaps in documentation
                and testing strategy, and teams that were often working
                alongside one another instead of collaboratively.
              </p>

              <p>
                As I became more embedded with the development team, I
                identified a gap between some contracted work and the technical
                needs being surfaced by developers.
              </p>

              <p className="font-medium text-[var(--text-dark)]">
                The challenge wasn&apos;t only completing a migration. We needed
                a clearer way of working together.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.4fr] md:gap-20">
            <Eyebrow>My Role</Eyebrow>

            <div className="max-w-3xl space-y-6 text-lg leading-8 text-[var(--text-soft)]">
              <p>
                As Technical Project Manager, I worked across developers,
                vendors, QA, and the source systems that depended on the
                application.
              </p>

              <p>
                My role extended beyond coordinating timelines. I helped improve
                project visibility, facilitate technical conversations,
                coordinate testing, support documentation, identify delivery
                risks, and create clearer ownership across teams.
              </p>

              <p>
                I also stepped directly into testing when needed, which gave me
                a deeper understanding of the application and helped me
                communicate more effectively between technical teams and QA.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <Eyebrow>My Approach</Eyebrow>

          <div className="mt-10 grid gap-10 md:grid-cols-2">

            <div>
              <h2
                className="text-3xl text-[var(--text-dark)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Creating visibility
              </h2>
              <p className="mt-4 leading-7 text-[var(--text-soft)]">
                I created clearer plans and project visibility so each team
                understood progress, dependencies, testing needs, and where the
                project stood.
              </p>
            </div>

            <div>
              <h2
                className="text-3xl text-[var(--text-dark)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Restructuring delivery
              </h2>
              <p className="mt-4 leading-7 text-[var(--text-soft)]">
                After surfacing concerns from the development team, I escalated
                the delivery gap to management. The approach was restructured,
                allowing vendor support to focus on frontend UI work and
                component segmentation while backend developers concentrated on
                core migration work.
              </p>
            </div>

            <div>
              <h2
                className="text-3xl text-[var(--text-dark)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Building a testing strategy
              </h2>
              <p className="mt-4 leading-7 text-[var(--text-soft)]">
                With limited documentation and no established test plan, I
                worked with the team to document application functionality,
                develop testing plans, and conduct hands-on testing before
                formal QA validation.
              </p>
            </div>

            <div>
              <h2
                className="text-3xl text-[var(--text-dark)]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Connecting the teams
              </h2>
              <p className="mt-4 leading-7 text-[var(--text-soft)]">
                I coordinated across development, vendors, QA, and dependent
                source systems to create clearer expectations, stronger
                communication, and greater accountability.
              </p>
            </div>

          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.4fr] md:gap-20">
            <Eyebrow>The Outcome</Eyebrow>

            <div className="max-w-3xl space-y-6 text-lg leading-8 text-[var(--text-soft)]">
              <p>
                The project moved from fragmented communication and limited
                testing structure toward a coordinated delivery model with
                clearer ownership, documented testing, stronger visibility, and
                active collaboration across teams.
              </p>

              <p>
                Modernization work progressed through the end-of-life milestone
                while dependent source systems were given additional time to
                complete readiness activities.
              </p>

              <p>
                Rather than rushing production implementation, the additional
                testing window allowed QA and source-system teams to validate
                workflows more thoroughly and build greater confidence ahead of
                launch.
              </p>

              <p className="font-medium text-[var(--text-dark)]">
                The modernization moves the organization away from end-of-life
                technology and toward a more secure and supportable platform.
              </p>
            </div>
          </div>
        </section>

        <section className="pt-16 md:pt-20">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.4fr] md:gap-20">
            <Eyebrow>What I Took From It</Eyebrow>

            <p
              className="max-w-3xl text-3xl leading-tight text-[var(--text-dark)] md:text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Technical challenges aren&apos;t solved by technology alone.
              Creating clarity, trust, and communication between the people
              doing the work can be just as important as the solution itself.
            </p>
          </div>
        </section>

      </Container>
    </main>
  );
}