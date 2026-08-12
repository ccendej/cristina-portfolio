type HeadingProps = {
  children: React.ReactNode;
};

export default function Heading({
  children,
}: HeadingProps) {
  return (
    <h1
      style={{ fontFamily: "var(--font-heading)" }}
      className="
        text-4xl
        md:text-7xl
        lg:text-8xl
        leading-[1.05]
        tracking-tight
        font-medium
      "
    >
      {children}
    </h1>
  );
}