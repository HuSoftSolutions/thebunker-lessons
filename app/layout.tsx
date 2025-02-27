// app/layout.tsx
import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Bunker Lessons",
  description: "Level Up Your Game With The Bunker!",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
