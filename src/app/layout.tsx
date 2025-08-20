import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Canvix - Unlock your email potential.",
  description: "Build beautiful, professional emails with no coding required. The complete platform that transforms how teams create, collaborate, and optimize email campaigns.",
  keywords: "email builder, email templates, drag and drop email, email marketing, professional emails, email design",
  authors: [{ name: "Canvix" }],
  creator: "Canvix",
  publisher: "Canvix",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/canvix-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/canvix-logo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/canvix-logo.png",
    apple: "/canvix-logo.png",
  },
  openGraph: {
    type: "website",
    url: "https://canvix.email",
    title: "Canvix - Unlock your email potential.",
    description: "Build beautiful, professional emails with no coding required. The complete platform that transforms how teams create, collaborate, and optimize email campaigns.",
    siteName: "Canvix",
    images: [
      {
        url: "/canvix-logo-full-white.png",
        width: 1200,
        height: 630,
        alt: "Canvix Email Builder Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canvix - Unlock your email potential.",
    description: "Build beautiful, professional emails with no coding required. The complete platform that transforms how teams create, collaborate, and optimize email campaigns.",
    images: ["/canvix-logo-full-white.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
