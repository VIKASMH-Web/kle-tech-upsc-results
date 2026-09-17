import type { Metadata } from "next";
import "./globals.css";

export const viewport = {
  themeColor: "#060d1f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Round 1 Results — UPSC Mock Prelims | UPSC Aspirants Club KLE Tech",
  description:
    "Official Results Portal for Office Bearer Recruitment Round 1 (UPSC Mock Prelims) — UPSC Aspirants Club, KLE Technological University.",
  keywords: [
    "KLE Technological University",
    "UPSC Aspirants Club",
    "Office Bearer Recruitment",
    "Round 1 Results",
    "Mock Prelims Results",
    "KLE Tech",
    "Results Portal",
  ],
  authors: [{ name: "UPSC Aspirants Club, KLE Tech" }],
  openGraph: {
    title: "Round 1 Results | UPSC Aspirants Club KLE Tech",
    description:
      "Check your Round 1 Office Bearer Recruitment (UPSC Mock Prelims) result by entering your USN.",
    siteName: "UPSC Aspirants Club — KLE Technological University",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='48' fill='%23060d1f' stroke='%23c8963e' stroke-width='4'/><circle cx='50' cy='50' r='18' fill='none' stroke='%23c8963e' stroke-width='2'/><path d='M50 10 L50 90 M10 50 L90 50' stroke='%23c8963e' stroke-width='1.5'/></svg>" />
      </head>
      <body className="bg-[#050b1d] text-slate-200 antialiased min-h-screen selection:bg-amber-500/20 selection:text-amber-200">
        {children}
      </body>
    </html>
  );
}
