type EyebrowProps = {
  children: React.ReactNode;
};

export default function Eyebrow({ children }: EyebrowProps) {
  return (
    <p className="mb-8 text-xs uppercase tracking-[0.35em] text-[var(--desert-rock)]">
      {children}
    </p>
  );
}