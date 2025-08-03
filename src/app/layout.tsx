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
  title: "Ducts And Vents | From Every State We Clean It Straight",
  description:
    "At DuctsandVents, we specialize in both residential and commercial duct cleaning, proudly serving clients across the United States. While our core operations are concentrated in states like Texas, Florida, California, Alabama, Arizona, Colorado, Connecticut, Georgia, Illinois, Indiana, Massachusetts, Michigan, Minnesota, Missouri, Nevada, New York, Oklahoma, Oregon, Pennsylvania, South Carolina, Tennessee, Vermont, Virginia, Washington, West Virginia. Our services extend nationwide.",
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
