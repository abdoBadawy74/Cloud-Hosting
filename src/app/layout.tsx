import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import {Noto_Kufi_Arabic} from "next/font/google";

// const notoKufiArabic = Noto_Kufi_Arabic({subsets:['arabic'],weight:['300','500']});


export const metadata: Metadata = {
  title: "Cloud Hosting",
  description: "Cloud Hosting Project"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
