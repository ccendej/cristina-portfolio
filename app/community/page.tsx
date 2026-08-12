import Image from "next/image";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

const basePath =
  process.env.NODE_ENV === "production" ? "/cristina-portfolio" : "";

export default function CommunityPage() {
  return (
    <main className="bg-[rgba(247,243,237,0.57)] pt-12 pb-16 md:pt-20 md:pb-32">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">

          {/* LEFT — CONTENT */}
          <div>
            {/* INTRO */}
            <Eyebrow>Community</Eyebrow>

            <h1
              className="max-w-4xl text-[36px] font-medium leading-[1.05] tracking-tight text-[var(--text-dark)] md:text-7xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Leadership beyond the workplace.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 md:mt-8 md:text-lg md:leading-8">
              Teaching, mentoring, and creating community have shaped how I
              listen, communicate, and lead.
            </p>

            {/* MENTORSHIP */}
            <section className="mt-12 md:mt-16">
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                Five Years of Mentorship
              </p>

              <h2
                className="mt-3 text-[28px] leading-tight text-[var(--text-dark)] md:mt-4 md:text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Mentorship
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600 md:mt-5">
                Mentorship had a meaningful impact on my own journey, which
                inspired me to spend five years supporting students through
                college and career decisions. The experience taught me how to
                listen, guide, and help others find a path that felt right for
                them.
              </p>
            </section>

            {/* YOGA & FITNESS */}
            <section className="mt-12 md:mt-16">
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                Teaching &amp; Fitness
              </p>

              <h2
                className="mt-3 text-[28px] leading-tight text-[var(--text-dark)] md:mt-4 md:text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Yoga &amp; Fitness
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600 md:mt-5">
                Becoming a yoga teacher began as a way to better understand
                myself and find confidence in my own voice. Teaching has
                strengthened the way I guide groups, communicate clearly, and
                create environments where people feel comfortable being
                present.
              </p>

              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                  Credentials
                </p>

                <div className="mt-3 space-y-1 text-sm text-[var(--text-soft)]">
                  <p>Yoga Alliance Registered Yoga Teacher (RYT 200)</p>
                  <p>ACE Group Fitness Instructor — In Progress</p>
                </div>
              </div>
            </section>

            {/* EVENTS */}
            <section className="mt-12 md:mt-16">
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                Currently Exploring
              </p>

              <h2
                className="mt-3 text-[28px] leading-tight text-[var(--text-dark)] md:mt-4 md:text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Events &amp; Community Experiences
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600 md:mt-5">
                I&apos;m expanding my experience into event planning and
                community-centered experiences, another way to bring people
                together intentionally.
              </p>
            </section>
          </div>

          {/* RIGHT — PHOTOS */}
          <div className="mt-4 space-y-10 lg:mt-0 lg:space-y-12">

            {/* GRADUATION PHOTO */}
            <div className="mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none">
              <Image
                src={`${basePath}/pictures/community-graduation.jpeg`}
                alt="Celebrating a graduation"
                width={1200}
                height={1600}
                className="h-auto w-full object-contain"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 40vw"
                priority
              />
            </div>

            {/* YOGA CERTIFICATION PHOTO */}
            <div className="mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none">
              <Image
                src={`${basePath}/pictures/yoga-certification.jpeg`}
                alt="Completing my 200-hour yoga teacher training"
                width={1200}
                height={1600}
                className="h-auto w-full object-contain"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 40vw"
              />
            </div>

          </div>
        </div>
      </Container>
    </main>
  );
}