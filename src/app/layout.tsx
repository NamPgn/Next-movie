import LayoutWebsite from "@/Layout/Client";
import RootLayout from "./RootLayout"; // Đảm bảo đường dẫn đúng
import { ApiContextProvider } from "@/context/api";
import { MyContextProvider } from "@/context";
import { GlobalStyle } from "@/components/Styled/Global";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout>
      <MyContextProvider>
        <ApiContextProvider>
          <LayoutWebsite>{children}</LayoutWebsite>
        </ApiContextProvider>
      </MyContextProvider>
      <GlobalStyle />
    </RootLayout>
  );
}
