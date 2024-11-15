"use client";
import useAsyncData from "../../../../../hook/useData";
import LoadingUsagyuuun from "../../Loading";
import dynamic from "next/dynamic";

const RecentlyUpdated = dynamic(() => import("../../RecentlyUpdated"));
const CategoryHomePage = () => {
  const {
    data: categorys,
    isLoading,
    isError,
  } = useAsyncData("categorys", 1, undefined);
  
  if (isLoading) {
    return <LoadingUsagyuuun />;
  }
  if (isError) {
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
