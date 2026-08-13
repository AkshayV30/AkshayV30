export function formatMonth(value: string): string {
  const [year, month] = value.split("-").map(Number);

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(new Date(year, month - 1));
}

export function formatDateRange(startMonth: string, endMonth?: string): string {
  return `${formatMonth(startMonth)} – ${
    endMonth ? formatMonth(endMonth) : "Present"
  }`;
}

export function calculateDuration(
  startMonth: string,
  endMonth?: string,
): string {
  const [startYear, startMonthNumber] = startMonth.split("-").map(Number);

  const start = startYear * 12 + (startMonthNumber - 1);

  const endDate = endMonth
    ? endMonth.split("-").map(Number)
    : [new Date().getFullYear(), new Date().getMonth() + 1];

  const end = endDate[0] * 12 + (endDate[1] - 1);

  const months = Math.max(1, end - start + 1);

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? "year" : "years"}`);
  }

  if (remainingMonths > 0) {
    parts.push(
      `${remainingMonths} ${remainingMonths === 1 ? "month" : "months"}`,
    );
  }

  return parts.join(" ");
}

export function sortExperiencesByRecent<T extends { startMonth: string }>(
  experiences: readonly T[],
): T[] {
  return [...experiences].sort((a, b) =>
    b.startMonth.localeCompare(a.startMonth),
  );
}
