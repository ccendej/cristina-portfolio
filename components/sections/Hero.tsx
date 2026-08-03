import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <Container>
        <div className="max-w-4xl">
          <p className="eyebrow mb-8">
            Technical Project Manager • Facilitator • Lifelong Learner
          </p>

          <h1 className="font-heading text-6xl md:text-8xl leading-[1.05] tracking-tight">
            Building trust through technology, leadership, and human connection.
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-8 text-[var(--text-light)]">
            I believe the best work begins with relationships. Whether I'm partnering with
            developers, mentoring others, or teaching yoga, my goal is always the same:
            create environments where people feel supported, challenged, and inspired to grow.
          </p>
        </div>
      </Container>
    </section>
  );
}