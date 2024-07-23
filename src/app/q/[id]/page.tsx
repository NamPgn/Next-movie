"use client";
import LazyLoadOtherComponents from "@/app/components/LazyOtherComponents";
import { Loading } from "@/app/components/Message/Notification";
import dynamic from "next/dynamic";
import Head from "next/head";
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
      <Head>
        <title>Hoạt Hình Trung Quốc - Đấu phá thương khung phần 5</title>
        <meta name="description" content="Đấu phá thương khung phần 5" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CategoryPage id={id} />
      <LazyLoadOtherComponents>
        <GetAllCategoryNotRequest id={id} />
      </LazyLoadOtherComponents>
    </>
  );
};

export default CategoryProduct;
