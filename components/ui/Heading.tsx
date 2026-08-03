type HeadingProps = {
  children: React.ReactNode;
};

export default function Heading({
  children,
}: HeadingProps) {
  return (
    <h2 className="font-heading text-5xl md:text-6xl leading-tight tracking-tight">
      {children}
    </h2>
  );
}