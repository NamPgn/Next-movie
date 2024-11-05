"use client";
import useAsyncData from "../../../../../hook/useData";
import LoadingUsagyuuun from "../../Loading";
import RecentlyUpdated from "../../RecentlyUpdated";

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
        loadmore="SEE All"
      />
    </div>
  );
};

export default CategoryHomePage;
