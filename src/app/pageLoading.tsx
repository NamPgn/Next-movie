import NextTopLoader from "nextjs-toploader";
import React from "react";

const PagesTopLoader = () => {
  return (
    <NextTopLoader
      color="#f4f4f4" 
      initialPosition={0.1} 
      crawlSpeed={300} 
      height={5} 
      crawl={true}
      showSpinner={false} // Hiển thị spinner tạo cảm giác tải trang
      easing="ease-in-out" 
      speed={300}
      shadow="0 0 10px #2299DD"
      zIndex={9999}
      showAtBottom={false}
      
    />
  );
};

export default PagesTopLoader;
