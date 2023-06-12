import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: true,
  variable: "--font-rubik",
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
      <body className={`${rubik.className} text-white`}>{children}</body>
    </html>
  );
}
