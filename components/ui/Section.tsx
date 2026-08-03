type SectionProps = {
  children: React.ReactNode;
  id?: string;
};

export default function Section({
  children,
  id,
}: SectionProps) {
  return (
    <section id={id} className="py-28 lg:py-36">
      {children}
    </section>
  );
}