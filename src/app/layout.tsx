import "./globals.css";
import { Fira_Mono } from "next/font/google";

const fira_Mono = Fira_Mono({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: true,
  variable: "--font-fira-mono",
});

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
      <body className={`${fira_Mono.className} text-white`}>{children}</body>
    </html>
  );
}
