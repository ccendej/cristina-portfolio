type EyebrowProps = {
  children: React.ReactNode;
};

export default function Eyebrow({ children }: EyebrowProps) {
  return (
    <p className="uppercase tracking-[0.35em] text-xs text-[var(--olive)]">
      {children}
    </p>
  );
}