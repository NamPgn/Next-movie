"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store/store";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hoạt Hình Trung Quốc",
  description: "Đấu phá thương khung phần 5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
