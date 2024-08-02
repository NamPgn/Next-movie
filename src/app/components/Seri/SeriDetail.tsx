"use client";
import React, { useEffect, useState } from "react";
import MVLink from "../Location/Link";
import { useRouter } from "next/navigation";
type SeriDetailPropsType = {
  seriProducts: any;
  productId: string;
  name: string;
};

const SeriDetailProducts = ({
  seriProducts,
  productId,
  name,
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
      router.push(`/d/${seriProducts[nextIndex]._id}`);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      router.push(`/d/${seriProducts[prevIndex]._id}`);
    }
  };
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center my-6 bg-gray-800 p-4 rounded-lg">
        <div className="flex mb-4 sm:mb-0">
          <button
            onClick={handlePrevious}
            disabled={currentIndex <= 0}
            className={`bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white px-4 py-2 rounded-l transition duration-300 ease-in-out flex items-center ${currentIndex <= 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Tập trước
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= seriProducts.length - 1}
            className={`bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white px-4 py-2 rounded-r transition duration-300 ease-in-out flex items-center ${currentIndex >= seriProducts.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Tập tiếp theo
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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
        <div className="flex">
          <button className="bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white px-4 py-2 rounded-l transition duration-300 ease-in-out flex items-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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
          <button className="bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white px-4 py-2 rounded-r transition duration-300 ease-in-out flex items-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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
      <div className="flex items-center mb-4">
        <div className="w-6 h-6 bg-red-500 rounded-sm flex items-center justify-center mr-2">
          <svg
            className="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h1 className="text-xl font-bold">{name}</h1>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-2 ">
        {seriProducts &&
          seriProducts.map((items: any) =>
            items.isApproved ? (
              <MVLink
                to={`/d/${items._id}`}
                key={items._id}
                className={`link `}
              >
                <div
                  className={`${
                    items._id === productId ? "active bg-orange-500" : ""
                  } bg-gray-800  hover:bg-gray-700 text-white rounded-lg transition-colors duration-300 ease-in-out shadow-md overflow-hidden `}
                >
                  <div className="p-3 text-center">
                    {items.seri ? `Tập ${items.seri}` : ""}
                  </div>
                </div>
              </MVLink>
            ) : null
          )}
      </div>
    </>
  );
};

export default SeriDetailProducts;
