export default function VerifiedProfileAccent() {
  return (
    <span
      aria-hidden="true"
      className={[
        "absolute inset-x-0 top-0 h-px",
        "bg-gradient-to-r",
        "from-transparent via-primary/50 to-transparent",
        "opacity-0",
        "transition-opacity duration-300",
        "group-hover:opacity-100",
      ].join(" ")}
    />
  );
}
