import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Roboto({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: METADATA_LAYOUT.TITLE,
  description: METADATA_LAYOUT.DESCRIPTIONS,
  openGraph: {
    title: METADATA_LAYOUT.OPNEGRAPH.TITLE,
    url: `${process.env.NEXT_PUBLIC_URL}`,
    images: [METADATA_LAYOUT.OPNEGRAPH.IMAGE],
    type: "website",
    siteName: METADATA_LAYOUT.SITE_NAME,
  },
  verification: {
    google: METADATA_LAYOUT.VERIFICATION,
  },
  icons: {
    icon: METADATA_LAYOUT.ICON,
  },
};
import Header from "../components/Teamplates/Header";
import Footer from "@/components/Teamplates/Footer";
import React from "react";
import StoreProvider from "../providers/StoreProvider";
import Head from "next/head";
import PagesTopLoader from "../components/Loading/pageLoading";
import { METADATA_LAYOUT } from "@/constant";
import ReactQueryProvider from "../providers/QueryClientProvider";
import { ToastContainer } from 'react-toastify';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <Head>
        <link rel="icon" href="/icon.ico" sizes="any" />
      </Head>
      <body className={inter.className + " bg-[#23232a] "}>
        <PagesTopLoader />
        <StoreProvider>
          <ReactQueryProvider>
            <Header />
            {children}
            <Analytics />
            <SpeedInsights />
            <Footer />
            <ToastContainer />
          </ReactQueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
