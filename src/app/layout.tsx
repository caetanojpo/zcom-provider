import type {Metadata} from "next";
import "./globals.css";
import {neometric} from "@/app/fonts";

export const metadata: Metadata = {
  title: "ZCOM Provedor de Internet",
  description: "ZCOM Provedor de Internet",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
      <html lang="pt-br" className={`${neometric.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
      {children}
      </body>
      </html>
  );
}
