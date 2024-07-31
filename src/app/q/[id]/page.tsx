import CategoryPage from "@/app/components/Category";
import Head from "next/head";
import React from "react";

const CategoryProduct = ({ params }: any) => {
  const { id } = params;
  return (
    <>
      <Head>
        <title>Hoạt Hình Trung Quốc - Đấu phá thương khung phần 5</title>
        <meta name="description" content="Đấu phá thương khung phần 5" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CategoryPage id={id} />
    </>
  );
};

export default CategoryProduct;
