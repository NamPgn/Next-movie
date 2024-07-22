"use client";
import React, { createContext, useState } from "react";
import { useSWRWithAxios } from "../../hook/Swr";
import { urlSwr } from "../../app/function";
interface ApiContextType {
  background?: any;
  seri: any,
  loadingSeri: any,
  categorymain: any,
  LoadingCateMain: any,
  isError: any,
  weeks: any,
  setPage: any,
  page: any,
}

export const ApiContext = createContext<ApiContextType>({} as ApiContextType);
export const ApiContextProvider = (props: any) => {
  const [page, setPage] = useState(1);
  const { data: weeks } = useSWRWithAxios(urlSwr + "/weeks");

  const { data: background } = useSWRWithAxios(urlSwr + "/background");
  const { data: seri, isLoading: loadingSeri } = useSWRWithAxios(
    urlSwr + `/types`
  );

  const {
    data: categorymain,
    isLoading: LoadingCateMain,
    isError,
  } = useSWRWithAxios(urlSwr + `/categorymain`);
  const value:any = {
    //danh mục phim nhiều tập
    seri,
    loadingSeri,
    //phim lẻ phim 1 tập
    categorymain,
    LoadingCateMain,
    isError,

    //background
    background,

    //weekCategory
    weeks,
    setPage,
    page,
  };
  return (
    <ApiContext.Provider value={value}>{props.children}</ApiContext.Provider>
  );
};
