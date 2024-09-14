"use client";

export default function LocalDate(date: any) {
  const propDate = String(Object.values(date));
  //   console.log(date);
  //   console.log(propDate);
  const serverDate = new Date(propDate);
  const localDate = serverDate.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  //   console.log({ date: { propDate, serverDate, localDate } });

  return <>{localDate}</>;
}
