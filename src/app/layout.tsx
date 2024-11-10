import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
const inter = Roboto({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Hoạt Hình Trung Quốc - Xem Hoạt Hình 3D Anime Vietsub Online | HOATHINHTRUNGQUOC",

  description:
    "HH3D tuyển chọn phim bộ, phim lẻ hoạt trung quốc 3D viêt sub mới nhất với đồ họa đẹp mắt, nội dung lôi cuốn, hấp dẫn, phim xem nhanh và chất lượng HD.",
  openGraph: {
    title: "Hoạt Hình Trung Quốc",
    url: "https://hoathinhtrungquoc.site/",
  
    images: [
      {
        url: "https://res.cloudinary.com/daz3lejjo/image/upload/f_webp/v1721825684/category/category_1689076028777-a6e7592292d5428b1bc4.jpg.jpg",
        width: 800,
        height: 600,
        alt: "Hoạt Hình Trung Quốc",
      },
    ],
    type: "website",
  },
};
import Header from "./components/Teamplates/Header";
import Footer from "@/app/components/Teamplates/Footer";
import CategoryProductSidebar from "./components/Category/component/sidebar";
import React from "react";
import StoreProvider from "./StoreProvider";
import Head from "next/head";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <Head>
        <link rel="icon" href="" />
      </Head>
      <body className={inter.className + " bg-[#23232a]"}>
        <Header />
        <StoreProvider>
          <main className="container mx-auto ">
            <div className="text-white min-h-screen  lg:px-[8%] md:px-[8%] px-[3%] py-[10px]">
              <div className="bg-[#1a1a20] p-3">
                <div className="flex gap-5 ">
                  <div className="w-full lg:w-9/12">{children}</div>
                  <div className="w-3/12 hidden lg:block">
                    <CategoryProductSidebar />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </StoreProvider>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
