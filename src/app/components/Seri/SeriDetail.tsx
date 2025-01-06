"use client";
import React, { useEffect, useState } from "react";
import MVLink from "../Location/Link";
import { useRouter } from "next/navigation";
type SeriDetailPropsType = {
  seriProducts: any;
  productId: string;
  name: string;
  isMovie: string;
};

const SeriDetailProducts = ({
  seriProducts,
  productId,
  name,
  isMovie,
}: SeriDetailPropsType) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const router = useRouter();
  useEffect(() => {
    const index = seriProducts.findIndex(
      (product: any) => product._id === productId
    );
    setCurrentIndex(index !== -1 ? index : 0);
  }, [productId]);
  const handleNext = () => {
    if (currentIndex < seriProducts.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      router.push(`/d/${seriProducts[nextIndex].slug}`);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      router.push(`/d/${seriProducts[prevIndex].slug}`);
    }
  };
  return (
    <div className="space-y-5 bg-[#1f1f24] p-5 rounded-xl shadow-lg mt-5">
      {/* Thanh điều hướng */}
      <div className="flex flex-wrap justify-between items-center bg-[#2a2c31] p-4 rounded-lg shadow-md gap-2">
        <div className="flex gap-3">
          <button
            onClick={handlePrevious}
            disabled={currentIndex <= 0}
            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-md transition-all duration-300 ${
              currentIndex <= 0
                ? "bg-gray-800 text-gray-400 opacity-50 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-500 text-white"
            }`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Tập tiếp theo
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= seriProducts.length - 1}
            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-md transition-all duration-300 ${
              currentIndex >= seriProducts.length - 1
                ? "bg-gray-800 text-gray-400 opacity-50 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-500 text-white"
            }`}
          >
            Tập trước
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-blue-600 hover:bg-blue-500 text-white transition-all duration-300">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
            Mở rộng
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-gray-700 hover:bg-gray-600 text-white transition-all duration-300">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
            Tắt đèn
          </button>
        </div>
      </div>

      {/* Tiêu đề phim */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-gradient-to-br from-red-500 to-orange-400 rounded-full flex items-center justify-center shadow-md">
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h1 className="text-xl font-semibold text-white">{name}</h1>
      </div>

      {/* Danh sách tập phim */}
      {isMovie === "drama" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mt-4">
          {seriProducts &&
            seriProducts.map((items: any) =>
              items.isApproved && !items.isMovie ? (
                <MVLink
                  prefetch={false}
                  to={`/d/${items.slug}`}
                  key={items._id}
                  className="relative group bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
                >
                  {/* Tập số */}
                  <div
                    className={`p-3 text-center text-base font-medium ${
                      items._id === productId ? "bg-orange-500 text-white" : ""
                    }`}
                  >
                    {items.seri ? `Tập ${items.seri}` : ""}
                  </div>

                  {/* Hiệu ứng khi hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </MVLink>
              ) : null
            )}
        </div>
      )}
    </div>
  );
};

export default SeriDetailProducts;
