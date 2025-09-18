import type React from "react";
import type { Metadata } from "next";
import { Inter, Gabarito } from "next/font/google";
import "./globals.css";
import PageLayout from "@/components/page-layout";

// Optimized font loading for Vercel deployment
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const gabarito = Gabarito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gabarito",
  weight: ["400", "500", "600", "700", "900"],
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://journeysync.com"),
  title: "Journey Sync - Your Gateway to Global Education",
  description:
    "Connect with mentors and discover your dream university abroad. Get personalized guidance for applications, visas, and more with Journey Sync.",
  keywords: [
    "study abroad",
    "university application",
    "student visa",
    "education consulting",
    "international education",
    "study overseas",
    "university guidance",
  ],
  authors: [{ name: "Journey Sync" }],
  creator: "Journey Sync",
  publisher: "Journey Sync",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Journey Sync - Your Gateway to Global Education",
    description:
      "Connect with mentors and discover your dream university abroad. Get personalized guidance for applications, visas, and more.",
    type: "website",
    locale: "en_US",
    siteName: "Journey Sync",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Journey Sync - Study Abroad Guidance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Journey Sync - Your Gateway to Global Education",
    description:
      "Connect with mentors and discover your dream university abroad.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://journeysync.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#42362A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${gabarito.variable}`}>
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />

        {/* Preload critical pages for faster navigation */}
        <link rel="prefetch" href="/education-loan" />
        <link rel="prefetch" href="/test-prep" />
        <link rel="prefetch" href="/vas-services" />

        {/* Performance monitoring */}
        <script src="/performance-monitor.js" defer />
      </head>
      <body className="antialiased bg-background text-foreground">
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
