import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Syed Moinuddin — Frontend Engineer",
  description:
    "Frontend Engineer and Web Designer, currently at Kora. Focused on interfaces and experiences, working remotely from Lagos, Nigeria.",
  generator: "Next.js",
  applicationName: "Syed Moinuddin",
  keywords: [
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Syed Moinuddin — Frontend Engineer",
    description:
      "Frontend Engineer and Web Designer. Focused on interfaces and experiences, working remotely.",
    url: "https://www.victorwilliams.me/",
    siteName: "www.victorwilliams.me",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
