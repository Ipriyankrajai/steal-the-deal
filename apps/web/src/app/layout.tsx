import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import "@/app/global.css";
import Header from "@/components/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  preload: true,
  display: "swap",
});

const title = "Steal the Deal - Discover Local Store Discounts Near You";
const description =
  "Discover exclusive discounts at local offline stores near you. Steal the best deals and save big with our guide to nearby store discounts. Shop smarter today and don't miss out on amazing savings!";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "Steal The Deal",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@stealthedealin",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${inter.variable} ${lexend.variable} font-sans`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
