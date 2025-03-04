"use client";
import React, { useEffect, useState } from "react";
import { FaCircleLeft, FaCircleRight } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaWhatsapp,
} from "react-icons/fa";
import MVLink from "../Location/Link";
import { useRouter } from "next/navigation";
type SeriDetailPropsType = {
  seriProducts: any;
  productId: string;
  name: string;
  isMovie: string;
  getOneProductDetail: any;
};

const SeriDetailProducts = ({
  seriProducts,
  getOneProductDetail,
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
    <div className="space-y-5 bg-[rgba(255,255,255,.08)] shadow-lg">
      {/* Thanh điều hướng */}
      <div className="flex items-center justify-between bg-[rgba(0,0,0,.5)] p-3">
        <button
          onClick={handlePrevious}
          disabled={currentIndex <= 0}
          className={`flex items-center gap-2 px-4 py-2 text-sm rounded-md transition-all ${
            currentIndex <= 0
              ? "text-gray-500 cursor-not-allowed"
              : "text-white hover:text-gray-300"
          }`}
        >
          <FaCircleLeft /> NEXT
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-sm text-white">
          <MdOutlineMenu /> ALL
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= seriProducts.length - 1}
          className={`flex items-center gap-2 px-4 py-2 text-sm rounded-md transition-all ${
            currentIndex >= seriProducts.length - 1
              ? "text-gray-500 cursor-not-allowed"
              : "text-white hover:text-gray-300"
          }`}
        >
          PREV <FaCircleRight />
        </button>
      </div>
      <div className="border-b-4 border-[rgba(255,255,255,.08)]"></div>

      <div className="px-[30px] py-[25px] bg-[#171717] m-0">
        {/* Tiêu đề phim */}

        {/* Danh sách tập phim */}
        {isMovie === "drama" && (
          <div>
            <h2 className="text-lg text-white pb-[15px] mb-[8px] font-bold">
              Chọn tập phim
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-10 gap-2 max-h-80 overflow-y-auto scroll-container px-2">
              {seriProducts.map((item: any) => (
                <MVLink
                  prefetch={false}
                  to={`/d/${item.slug}`}
                  key={item._id}
                  className={`px-3 py-2 rounded-sm text-sm font-medium transition-all text-center ${
                    item._id === productId
                      ? "bg-gray-400 text-white"
                      : "bg-gray-600 hover:bg-gray-500 text-white"
                  }`}
                >
                  Tập {item.seri}
                </MVLink>
              ))}
            </div>
          </div>
        )}

        <div className="bg-[#171717] p-4 rounded mt-8">
          {/* Tiêu đề */}
          <h1 className="text-white text-lg font-semibold">{name}</h1>

          {/* Mô tả phim */}
          <p className="text-gray-300 text-sm mt-1">
            <strong className="text-white font-bold line-clamp-2 mt-8">
              {getOneProductDetail?.category?.des}
            </strong>{" "}
            – {getOneProductDetail?.summary}{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Xem thêm
            </a>
          </p>

          {/* Chia sẻ */}
          <div className="border-t border-gray-700 mt-4 pt-3 flex items-center">
            <span className="text-gray-300 text-sm">Chia sẻ</span>
            <span className="text-white font-semibold ml-1">2</span>
            <div className="flex items-center gap-2 ml-3">
              <a href="#" className="bg-[#1877F2] p-2 rounded">
                <FaFacebookF className="text-white w-4 h-4" />
              </a>
              <a href="#" className="bg-[#1DA1F2] p-2 rounded">
                <FaTwitter className="text-white w-4 h-4" />
              </a>
              <a href="#" className="bg-[#E60023] p-2 rounded">
                <FaPinterestP className="text-white w-4 h-4" />
              </a>
              <a href="#" className="bg-[#25D366] p-2 rounded">
                <FaWhatsapp className="text-white w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeriDetailProducts;
