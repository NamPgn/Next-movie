import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Hoạt Hình Trung Quốc",
  description: "Đấu phá thương khung phần 5",
  openGraph: {
    title: "Hoạt Hình Trung Quốc",
    description: "Đấu phá thương khung phần 5",
    url: "https://yourwebsite.com",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Hoạt Hình Trung Quốc",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoạt Hình Trung Quốc",
    description: "Đấu phá thương khung phần 5",
    images: ["https://yourwebsite.com/twitter-image.jpg"],
  },
};
import Header from "./components/Teamplates/Header";
import Footer from "@/app/components/Teamplates/Footer";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Header />
        <main className="container mx-auto bg-gray-900">
          <div className="text-white min-h-screen px-[10%] py-[10px]">
            {/* <nav className="bg-gray-700 p-2">Navigation links</nav> */}
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
