import Header from "./components/Teamplates/Header";
import Footer from "@/app/components/Teamplates/Footer";
import RootLayout from "./rootLayout";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout>
      <Header />
      <div className="text-white min-h-screen px-[10%] py-[10px]">
        {/* <nav className="bg-gray-700 p-2">Navigation links</nav> */}
        {children}
      </div>
      <Footer />
    </RootLayout>
  );
}
