"use client";
import dynamic from "next/dynamic";
import WeekComponent from "../../Week";
import { useQuery } from "@tanstack/react-query";
import LoadingUsagyuuun from "../../Loading";
import { getCategoryLatest } from "@/sevices/categorys";
import { useEffect } from "react";
import { getSocket } from "../../../../config/socket";
import { useCategories } from "@/hooks/app/categories";

const RecentlyUpdated = dynamic(() => import("../../RecentlyUpdated"));

const CategoryHomePage = () => {
  // const { categorys: val, setCategory } = useCategoryStore((state: any) => ({
  //   categorys: state.categorys,
  //   setCategory: state.setCategory,
  // }));

  const { data: val, isLoading, error: isError, refetch } = useCategories();

  // useEffect(() => {
  //   const socket = getSocket();

  //   socket.on("connect", () => {
  //     console.log("✅ Socket connected:", socket.id);
  //   });

  //   socket.on("test", (data) => {
  //     console.log("📡 Test event from server:", data);
  //   });

  //   socket.on("product:update", (data) => {
  //     console.log("🛠 Product updated:", data);
  //     if (data) {
  //       refetch();
  //     }
  //   });


  //   socket.on("product:add", (data) => {
  //     console.log("🛠 Product add:", data);
  //     // ✅ Gọi lại API hoặc mutate SWR/react-query tại đây
  //   });
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  if (isLoading) {
    return <LoadingUsagyuuun />;
  }
  if (isError) {
    return <div>Server error</div>;
  }
  return (
    <div className="p-3">
      <RecentlyUpdated
        data={val?.data}
        title="MỚI CẬP NHẬT"
        loadmore="Xem Thêm"
      />
      <WeekComponent title={"Lịch Chiếu"} />
    </div>
  );
};

export default CategoryHomePage;
