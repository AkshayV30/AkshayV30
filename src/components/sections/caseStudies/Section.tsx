interface CaseStudySectionProps {
  label: string;
  children: React.ReactNode;
}

export default function CaseStudySection({
  label,
  children,
}: CaseStudySectionProps) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-foreground/70">
        {label}
      </p>

      <p className="mt-2 text-sm leading-6 text-muted-foreground">{children}</p>
    </div>
  );
}
