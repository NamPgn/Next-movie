"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
   
      <body className={inter.className}>
        <main id="root">
          <Provider store={store}>
            {/* <PersistGate loading={null} persistor={persistor}> */}
            {children}
            {/* </PersistGate> */}
          </Provider>
        </main>
      </body>
    </html>
  );
}
