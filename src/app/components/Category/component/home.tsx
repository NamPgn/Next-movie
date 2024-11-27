"use client";

import useFetch from "../../../../../hook/useFecht";
import LoadingUsagyuuun from "../../Loading";
import dynamic from "next/dynamic";

const RecentlyUpdated = dynamic(() => import("../../RecentlyUpdated"));
const CategoryHomePage = () => {
  const {
    data: categorys,
    isLoading,
    error,
  } = useFetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/category/latest/next`);

  if (isLoading) {
    return <LoadingUsagyuuun />;
  }
  if (error) {
    return <div>Server error</div>;
  }

  return (
    <div>
      <RecentlyUpdated
        data={categorys.data}
        title="MỚI CẬP NHẬT"
        loadmore="Xem Thêm"
      />
    </div>
  );
};

export default CategoryHomePage;
