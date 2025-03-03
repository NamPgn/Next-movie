import React from "react";
import CategoryProductSidebar from "../components/Category/component/sidebar";


const MainLayout = ({ children }: any) => {
  return (
      <main className="container mx-auto">
        <div className="text-white min-h-screen lg:px-[8%] md:px-[8%] px-[3%] py-[10px]">
          <div className="bg-[#1a1a20]">
            <div className="flex gap-5 ">
              <div className="w-full lg:w-9/12">{children}</div>
              <div className="w-3/12 hidden lg:block">
                <CategoryProductSidebar />
              </div>
            </div>
          </div>
        </div>
      </main>
  );
};

export default MainLayout;
