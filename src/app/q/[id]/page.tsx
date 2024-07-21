import CategoryPage from "@/components/Category";
import GetAllCategoryNotRequest from "@/components/Category/component/other";
import LazyLoadOtherComponents from "@/components/LazyOtherComponents";
import React from "react";
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
