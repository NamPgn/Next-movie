"use client";

import React, { useEffect, useState } from "react";
import { WEEKDAY } from "@/constant";
import { getCategoryByWeek } from "@/sevices/categorys";
import CategoryContents from "../Category/Content/Category";
import useFetch from "../../../../hook/useFecht";
import Title from "../MV/Title";

interface WeekComponentProps {
  title: string;
}

interface Category {
  _id: string;
  name: string;
  slug: string;
  linkImg: string;
  time: string;
  sumSeri: string;
  products: any;
}

interface WeekData {
  _id: string;
  name: string;
}

interface CategoryResponse {
  content: Category[];
}

export default function WeekComponent({ title }: WeekComponentProps) {
  const { data: weeks, error } = useFetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/weeks`
  );
  const today = new Date();
  const day = today.getDay();

  const [isLoading, setIsLoading] = useState(true);
  const [tabs, setTabs] = useState(WEEKDAY[day]);
  const [categorys, setCategory] = useState<CategoryResponse | null>(null);

  const handleTabClick = (tabId: string) => {
    setTabs(tabId);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await getCategoryByWeek(tabs);
        setCategory(data);
      } catch (error) {
        console.error("Error fetching category data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [tabs]);

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        Error loading schedule data
      </div>
    );
  }

  return (
    <div>
      <Title>Lịch Phát Sóng</Title>
      <div className="container mx-auto">
        {/* Week days tabs */}
        <div className="grid grid-cols-7 gap-1 mt-4 mb-4">
          {weeks?.map((item: WeekData) => (
            <button
              key={item._id}
              className={`${
                tabs === item.name
                  ? "bg-[#0284C7] text-white"
                  : "bg-[#27272A] text-white hover:bg-[#3F3F46] cursor-pointer"
              }`}
              onClick={() => handleTabClick(item.name)}
              aria-label={`Xem lịch ${item.name}`}
            >
              <div className="text-[14px] py-2 text-center">
                <span>{item.name}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="my-5 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
          {isLoading ? (
            <div className="text-center py-8 text-white h-screen">
              <span className="animate-pulse">Đang tải...</span>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categorys?.content?.map((item: Category) => (
                <div className="px-2" key={item._id}>
                  <CategoryContents
                    title={item.name}
                    link={`/q/${item.slug}`}
                    image={item.linkImg}
                    time={item.time}
                    sumSeri={item.sumSeri}
                    products={item.products}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
