import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function CommunityPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <Container>
        <Eyebrow>Community</Eyebrow>

        <h1
          className="max-w-4xl text-5xl md:text-7xl font-medium tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Leadership beyond the workplace.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
          Teaching, mentoring, and creating community have shaped how I listen,
          communicate, and lead.
        </p>

        <div className="mt-24 space-y-20">
          <section>
            <p className="text-sm uppercase tracking-widest text-neutral-500">
              Teaching
            </p>

            <h2
              className="mt-4 text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Yoga & Fitness
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-neutral-600">
              Becoming a yoga teacher began as a way to better understand
              myself and find confidence in my own voice. Teaching has
              strengthened the way I guide groups, communicate clearly, and
              create environments where people feel comfortable being present.
            </p>

  <p className="mt-5 max-w-2xl leading-7 text-neutral-600">
    I'm continuing to grow as an instructor and am currently working
    toward my ACE Group Fitness Instructor certification.
  </p>
          </section>

          <section>
            <p className="text-sm uppercase tracking-widest text-neutral-500">
              Five Years
            </p>

            <h2
              className="mt-4 text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Mentorship
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-neutral-600">
              After benefiting from mentorship myself, I spent five years
              helping students navigate college and career decisions by first
              understanding who they were and what mattered to them.
            </p>
          </section>

          <section>
            <p className="text-sm uppercase tracking-widest text-neutral-500">
              Currently Exploring
            </p>

            <h2
              className="mt-4 text-4xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Events & Community Experiences
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-neutral-600">
              I'm expanding my experience into event planning and
              community-centered experiences, another way to bring people
              together intentionally.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}