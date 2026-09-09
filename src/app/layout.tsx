import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emrais Engineering Services Limited | Engineering, Construction & General Supplies",
  description:
    "EMRAIS Engineering Services Limited is an indigenous Nigerian firm providing premier Engineering Services, General Supplies, and General Contracts. RC No. 1617574. Based in Kaduna, serving nationwide.",
  keywords: [
    "Emrais Engineering",
    "Engineering Services Nigeria",
    "Construction Company Kaduna",
    "General Supplies Nigeria",
    "Civil Engineering Nigeria",
    "General Contracts",
    "Construction Abuja",
    "Nigerian Construction Firm",
  ],
  authors: [{ name: "Emrais Engineering Services Limited" }],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Emrais Engineering Services Limited",
    description:
      "Premier Engineering Services, General Supplies, and General Contracts. Transforming concepts into reality across Nigeria.",
    url: "https://emrais.com.ng",
    siteName: "Emrais Engineering Services Limited",
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emrais Engineering Services Limited",
    description:
      "Premier Engineering Services, General Supplies, and General Contracts. Transforming concepts into reality across Nigeria.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
