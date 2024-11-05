"use client";
import { useEffect } from "react";
import LoadingUsagyuuun from "../../Loading";
import dynamic from "next/dynamic";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { getAllCategoryLatest } from "@/lib/features/categorys/thunkActions";

const RecentlyUpdated = dynamic(() => import("../../RecentlyUpdated"));
const CategoryHomePage = () => {
  const categorys = useAppSelector((state) => state.category.category);
  const isLoading = useAppSelector((state) => state.category.isLoading);
  const isError = useAppSelector((state) => state.category.isError);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllCategoryLatest());
  }, []);
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
