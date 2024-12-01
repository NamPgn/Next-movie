import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Roboto({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Hoạt Hình Hi Hi - Xem Hoạt Hình 3D Anime Vietsub Online | HHHIHI",
  description:
    "HH3D tuyển chọn phim bộ, phim lẻ hoạt trung quốc 3D viêt sub mới nhất với đồ họa đẹp mắt, nội dung lôi cuốn, hấp dẫn, phim xem nhanh và chất lượng HD.",
  openGraph: {
    title: "Hoạt Hình Trung Quốc",
    url: `${process.env.NEXT_PUBLIC_URL}`,
    images: [
      {
        url: "https://res.cloudinary.com/daz3lejjo/image/upload/f_webp/v1732691384/hoa-giang-ho-chi-bat-luong-nhan-phan-6-2-1_qkxcfi.jpg",
        width: 800,
        height: 600,
        alt: "Hoạt Hình Trung Quốc",
      },
    ],
    type: "website",
    siteName:
      "Hoạt Hình Hi Hi - Xem Hoạt Hình 3D Anime Vietsub Online | HHHIHI",
  },
  verification: {
    google: "klYZi2fv--WqS45ghm2RIfoGCV41LxvwkDnkpuno8LE",
  },
  icons: {
    icon: "/icon.ico",
  },
};
import Header from "./components/Teamplates/Header";
import Footer from "@/app/components/Teamplates/Footer";
import React from "react";
import StoreProvider from "./StoreProvider";
import Head from "next/head";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <Head>
        <link rel="icon" href="/icon.ico" sizes="any" />
      </Head>
      <body className={inter.className + " bg-[#23232a] "}>
        <StoreProvider>
          <Header />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
          <Toaster />
        </StoreProvider>
      </body>
    </html>
  );
}
