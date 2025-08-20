import type { Metadata } from "next";
import { Geist, Geist_Mono, Courier_Prime } from "next/font/google";
import "./globals.css";
import Header from "./_components/base/header";
import Footer from "./_components/base/footer";
import { ToastProvider } from "./_components/sections/toasters";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HC Language 360 | Professional AI, Media, and Business Translation",
  description:
    "HC Language 360 provides AI & Data services, Media localization, and Business translation solutions. Helping businesses connect globally with quality language services.",
  keywords: [
    "translation services",
    "AI data services",
    "media localization",
    "business translation",
    "language solutions",
  ],
  openGraph: {
    title: "HC Language 360",
    description:
      "AI, Media, and Business Translation services for global communication.",
    url: "https://www.hclanguage360.com",
    siteName: "HC Language 360",
    images: [
      {
        url: "https://www.hclanguage360.com/og-image.svg",
        width: 1200,
        height: 630,
        alt: "HC Language 360",
      },
    ],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastProvider>
          <Header />
          {children}
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
