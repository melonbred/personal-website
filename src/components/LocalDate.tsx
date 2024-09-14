"use client";

export default function LocalDate(date: any) {
  const localDate = new Date();
  const localDateFormat = localDate.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  //   console.log({ date: { date, localDate, localDateFormat } });

  return <>{localDateFormat}</>;
}
