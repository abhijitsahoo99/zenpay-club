import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { WalletContextProvider } from "./context/WalletContextProvider";
import Appbar from "@/components/Appbar";

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
      <body className={gilroy.className}>
        <WalletContextProvider>
          <Appbar />
          {children}
        </WalletContextProvider>
      </body>
    </html>
  );
}
