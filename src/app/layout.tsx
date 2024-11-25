import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
const inter = Roboto({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title:
    "Hoạt Hình Trung Quốc - Xem Hoạt Hình 3D Anime Vietsub Online | HOATHINHTRUNGQUOC",

  description:
    "HH3D tuyển chọn phim bộ, phim lẻ hoạt trung quốc 3D viêt sub mới nhất với đồ họa đẹp mắt, nội dung lôi cuốn, hấp dẫn, phim xem nhanh và chất lượng HD.",
  openGraph: {
    title: "Hoạt Hình Trung Quốc",
    url: "https://hoathinhtrungquoc.site/",
    images: [
      {
        url: "https://res.cloudinary.com/daz3lejjo/image/upload/f_webp/v1730816245/category/hoa-giang-ho-chi-bat-luong-nhan-phan-6-300x450.jpg.jpg",
        width: 800,
        height: 600,
        alt: "Hoạt Hình Trung Quốc",
      },
    ],
    type: "website",
  },
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon.png",
    },
  ],
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
        <meta
          name="google-site-verification"
          content="klYZi2fv--WqS45ghm2RIfoGCV41LxvwkDnkpuno8LE"
        />
      </Head>
      <body className={inter.className + " bg-[#23232a] "}>
        <StoreProvider>
          <Header />
          {children}
          <Analytics />
          <Footer />
          <Toaster />
        </StoreProvider>
      </body>
    </html>
  );
}
