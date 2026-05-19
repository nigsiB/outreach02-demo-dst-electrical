import type { Metadata } from "next";
import Link from "next/link";
import { Outfit } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";

import "./globals.css";
const font = Outfit({ subsets: ["latin"], variable: "--font-body" });
export const metadata: Metadata = {
  title: { default: "DST Electrical | Cranleigh", template: "%s" },
  description: "Electrician demo.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={font.variable}>
      <body className="flex min-h-screen flex-col antialiased">
        <header className="bg-black text-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-bold">DST Electrical</Link>
            <nav className="flex gap-5 text-sm"><Link href="/contact">Contact</Link></nav>
          </div>
        </header>
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
