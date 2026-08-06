type EyebrowProps = {
  children: React.ReactNode;
};

export default function Eyebrow({ children }: EyebrowProps) {
  return (
    <p className="uppercase tracking-[0.35em] text-xs text-neutral-500 mb-6">
      {children}
    </p>
  );
}