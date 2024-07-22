import { ApiContextProvider } from "@/context/api";
import { MyContextProvider } from "@/context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RootLayout from "./rootLayout";
import LayoutWebsite from "@/layout/Client";
import { GlobalStyle } from "./components/Styled/Global";
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
