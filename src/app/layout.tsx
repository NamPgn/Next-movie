import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Hoạt Hình Trung Quốc",
  description:
    "Trang web hoạt hình trung quốc, cung cấp thông tin và video về hoạt hình nổi tiếng.",
  openGraph: {
    title: "Hoạt Hình Trung Quốc",
    description: "Đấu phá thương khung phần 5",
    url: "https://tromphim.site/",
    images: [
      {
        url: "https://res.cloudinary.com/daz3lejjo/image/upload/w_200/f_webp/w_100/v1721825684/category/category_1689076028777-a6e7592292d5428b1bc4.jpg.jpg",
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
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={inter.className + " bg-gray-900"}>
        <Header />
        <main className="container mx-auto ">
          <div className="text-white min-h-screen lg:px-[10%] md:px-[8%] px-[3%] py-[10px]">
            <div className="flex gap-5">
              <div className="w-full lg:w-9/12">{children}</div>
              <div className="w-3/12 hidden lg:block">
                <CategoryProductSidebar />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
