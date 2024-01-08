import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/ui/Header";

export const metadata: Metadata = {
  title: "Disney+ Clone",
  description: "For educational purposes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
