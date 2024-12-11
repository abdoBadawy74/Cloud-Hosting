import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
// import {Noto_Kufi_Arabic} from "next/font/google";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// const notoKufiArabic = Noto_Kufi_Arabic({subsets:['arabic'],weight:['300','500']});

export const metadata: Metadata = {
  title: "Cloud Hosting",
  description: "Cloud Hosting Project",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ToastContainer theme="colored" position="top-center" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
