interface VerifiedProfileHighlightsProps {
  highlights?: readonly string[];
}

export default function VerifiedProfileHighlights({
  highlights,
}: VerifiedProfileHighlightsProps) {
  if (!highlights?.length) {
    return null;
  }

  return (
    <ul className="mt-5 space-y-2.5">
      {highlights.map((highlight) => (
        <li
          key={highlight}
          className="flex items-start gap-2.5 text-xs leading-5 text-muted-foreground"
        >
          <span
            aria-hidden="true"
            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70"
          />

          <span>{highlight}</span>
        </li>
      ))}
    </ul>
  );
}
