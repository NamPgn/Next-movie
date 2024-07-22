import LazyLoadOtherComponents from "@/app/components/LazyOtherComponents";
import { Loading } from "@/app/components/Message/Notification";
import dynamic from "next/dynamic";
import React from "react";
const CategoryPage = dynamic(() => import("@/app/components/Category"), {
  loading: () => <Loading />,
});
const GetAllCategoryNotRequest = dynamic(
  () => import("@/app/components/Category/component/other"),
  {
    loading: () => <Loading />,
  }
);
const CategoryProduct = ({ params }: any) => {
  const { id } = params;
  return (
    <>
      <CategoryPage id={id} />
      <LazyLoadOtherComponents>
        <GetAllCategoryNotRequest id={id} />
      </LazyLoadOtherComponents>
    </>
  );
};

export default CategoryProduct;
