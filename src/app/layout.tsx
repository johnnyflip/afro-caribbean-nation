import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Afro Caribbean Nation Festival",
  description: "The ultimate celebration of Afro-Caribbean culture, music, and unity. Experience the rhythm, the culture, the nation.",
  keywords: ["Afro Caribbean", "festival", "music", "culture", "afrobeats", "caribbean"],
  openGraph: {
    title: "Afro Caribbean Nation Festival",
    description: "The ultimate celebration of Afro-Caribbean culture, music, and unity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
