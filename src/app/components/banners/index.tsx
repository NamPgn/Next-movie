"use client";

import { getBanners } from "@/sevices/banners";
import { useEffect, useState } from "react";

interface Banner {
  _id: string;
  title: string;
  imageUrl: string;
  position: "top-center" | "bottom-center" | "left-center" | "right-center";
  link: string;
  height?: any;
}

const BannerDisplay = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [visibleBanners, setVisibleBanners] = useState<Record<string, boolean>>(
    {}
  );
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await getBanners();
        setBanners(res.data.data);
        setVisibleBanners(
          res.data.data.reduce((acc: any, banner: Banner) => {
            acc[banner._id] = true;
            return acc;
          }, {})
        );
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu banner:", error);
      }
    };

    fetchBanners();
  }, []);

  const handleCloseBanner = (id: string) => {
    setVisibleBanners((prev) => ({
      ...prev,
      [id]: false,
    }));
  };
  const topCenterBanners = banners.filter(
    (banner) => banner.position === "top-center" && visibleBanners[banner._id]
  );
  if (topCenterBanners.length === 0) return null;

  const totalHeight = topCenterBanners.length * 90;
  return (
    <div className="w-full relative ">
      {isHidden ? null : (
        <div style={{ minHeight: `${totalHeight}px` }}>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 w-full md:w-auto">
            {banners
              .filter(
                (banner) =>
                  banner.position === "top-center" && visibleBanners[banner._id]
              )
              .map((banner: any, index) => (
                <div key={banner._id} className="relative">
                  <button
                    className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs"
                    onClick={() => setIsHidden(true)}
                  >
                    X
                  </button>
                  <a href={banner.link}>
                    <img
                      className={`w-full h-[90px]`}
                      src={banner.imageUrl}
                      alt={banner.title}
                    />
                  </a>
                </div>
              ))}
          </div>
        </div>
      )}

      {banners
        .filter(
          (banner) =>
            banner.position === "bottom-center" && visibleBanners[banner._id]
        )
        .map((banner) => (
          <div
            key={banner._id}
            className="fixed bottom-0 left-1/2 transform -translate-x-1/2 rounded-md w-full md:w-auto"
            style={{ zIndex: 50 }}
          >
            <div className="relative">
              <button
                className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs"
                onClick={() => handleCloseBanner(banner._id)}
              >
                ✖
              </button>
              <a href={banner?.link}>
                <img
                  className="w-full h-[80px]"
                  src={banner.imageUrl}
                  alt={banner.title}
                />
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BannerDisplay;
