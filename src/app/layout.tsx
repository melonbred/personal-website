import "./globals.css";
import { PT_Mono } from "next/font/google";

const pt_Mono = PT_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pt-mono",
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
      <body className={`${pt_Mono.className} font-mono`}>{children}</body>
    </html>
  );
}
