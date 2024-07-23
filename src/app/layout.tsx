"use client";
import { ApiContextProvider } from "@/context/api";
import { MyContextProvider } from "@/context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GlobalStyle } from "./components/Styled/Global";
import RootLayout from "./rootLayout";
import LayoutWebsite from "@/layout/Client";
import PrivateRouter from "@/router/Router-Security";
import LayoutAdmin from "@/layout/Admin";
import { usePathname } from "next/navigation";
export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/dashboard'); 
  return (
    <RootLayout>
      <MyContextProvider>
        <ApiContextProvider>
          {isAdmin ? (
            <PrivateRouter>
              <LayoutAdmin>{children}</LayoutAdmin>
            </PrivateRouter>
          ) : (
            <LayoutWebsite>{children}</LayoutWebsite>
          )}
        </ApiContextProvider>
      </MyContextProvider>
      <GlobalStyle />
    </RootLayout>
  );
}
