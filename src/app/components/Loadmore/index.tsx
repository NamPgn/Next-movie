"use client";
import React, { useContext, useEffect } from "react";
import { Spiner } from "../Message/Notification";
import PaginationCustoms from "../MV/Pagination";
import MVGridCategory from "../Grid/component";
import { ApiContext } from "@/context/api";
import { useAppDispatch, useAppSelector } from "@/hook";
import { getAllcate } from "@/redux/slice/category/thunk/category";
import MVTypeDisplay from "@/app/pages/Type/component";
export default function Loadmore() {
  const { setPage, page }: any = useContext(ApiContext);
  const category: any = useAppSelector((state) => state.category.category);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllcate(page));
  }, [page]);
  const isLoading = useAppSelector((state) => state.category.isLoading);
  if (isLoading) return <Spiner />;
  const data = {
    name: "Danh mục",
  };
  return (
    <>
      <MVTypeDisplay data={data}>
        <MVGridCategory
          type="category"
          gutter={[16, 16]}
          child={category && category.data}
        />
        <PaginationCustoms
          className="text-center"
          currentPage={page}
          defaultCurrent={1}
          totalItems={category.length}
          pageSize={20}
          onChange={(value: any) => setPage(value)}
        />
      </MVTypeDisplay>
    </>
  );
}
