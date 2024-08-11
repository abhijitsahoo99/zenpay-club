import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const gilroy = localFont({
  src: "../../public/fonts/Gilroy-Regular.woff",
});

export const metadata: Metadata = {
  title: "zenpay.club",
  description: "all in one payment aggregator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gilroy.className}>{children}</body>
    </html>
  );
}
