"use client";
import useSWR from "swr";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { getAllcate } from "@/lib/features/categorys/thunkActions";
import { Icategory } from "@/interfaces/category";

type DataTypes = "products" | "categorys";
export type CategoryLoadmore = {
  data: Icategory[];
  totalCount: number;
  totalPages: number;
};
const defaultCategoryLoadmore: CategoryLoadmore = {
  data: [],
  totalCount: 0,
  totalPages: 0,
};
const useAsyncData = (type: DataTypes, page: number) => {
  const dispatch = useAppDispatch();

  const dataFromStore: CategoryLoadmore = useAppSelector((state) => {
    if (type === "categorys") return state.category.category;
    return defaultCategoryLoadmore;
  });
  const { data, error, isLoading } = useSWR(
    dataFromStore?.data ? `/api/${type}?page=${page}` : null,
    {
      fetcher: async () => {
        if (type === "categorys") {
          const result = await dispatch(getAllcate(page));
          return result.payload?.data;
        }
      },
      revalidateOnFocus: false,
    }
  );
  useEffect(() => {
    if (data && type === "categorys") {
      dispatch({ type: "categorys/setCategorys", payload: data });
    }
    // Có thể thêm xử lý các loại dữ liệu khác ở đây nếu cần
  }, [data, dispatch, type]);
  return {
    data: dataFromStore,
    isLoading: isLoading,
    isError: error,
  };
};

export default useAsyncData;
