"use client";
import dynamic from "next/dynamic";
import WeekComponent from "../../Week";
import { useQuery } from "@tanstack/react-query";
import LoadingUsagyuuun from "../../Loading";
import { getCategoryLatest } from "@/sevices/categorys";

const RecentlyUpdated = dynamic(() => import("../../RecentlyUpdated"));

const CategoryHomePage = () => {
  // const { categorys: val, setCategory } = useCategoryStore((state: any) => ({
  //   categorys: state.categorys,
  //   setCategory: state.setCategory,
  // }));
  const {
    data: val,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categorys"],
    queryFn: async () => {
      const res = await getCategoryLatest();
      return res.data;
    },
  });
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
