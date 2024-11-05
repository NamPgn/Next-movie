"use client";
import useAsyncData from "../../../../../hook/useData";
import RecentlyUpdated from "../../RecentlyUpdated";

const CategoryHomePage = () => {
  const { data: categorys, isLoading, isError } = useAsyncData("categorys", 1);
  if (isLoading) {
    return <div className="seriLoading">Loading...</div>;
  }
  if (isError) {
    return <div>Server error</div>;
  }
  return (
    <div>
      <RecentlyUpdated
        data={categorys.data}
        title="MỚI CẬP NHẬT"
        loadmore="SEE MORE"
      />
    </div>
  );
};

export default CategoryHomePage;
