import "./globals.css";
import { Chivo_Mono } from "next/font/google";

const chivoMono = Chivo_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "MelonBred Keyboards",
  description: "MelonBred personal website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={chivoMono.className}>{children}</body>
    </html>
  );
}
