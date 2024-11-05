"use client";
import { useEffect, useState } from "react";
import RecentlyUpdated from "../components/RecentlyUpdated";
import { Icategory } from "@/interfaces/category";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { getAllcate } from "@/lib/features/categorys/thunkActions";
import useAsyncData from "../../../hook/useData";
export type CategoryLoadmore = {
  data: Icategory[];
  totalCount: number;
  totalPages: number;
};
const LoadMorePage = () => {
  const total = Math.round(44 / 24);
  const [page, setPage] = useState(1);
  const pages = Array(total)
    .fill(null)
    .map((_, index) => index + 1);
  const handleChangePage = (page: number) => {
    setPage(page);
  };
  const handleNextPage = () => {
    setPage((page) => page + 1);
  };
  const handlePreviosPage = () => {
    setPage((page) => page - 1);
  };
  const { data: categorys, isLoading, isError } = useAsyncData('categorys', page);
  if (isLoading) {
    return <div className="seriLoading">Loading...</div>;
  }
  return (
    <div>
      <RecentlyUpdated title="ALL" data={categorys.data} loadmore="" />
      <div className="flex items-center gap-4 bg-[#999]">
        <button
          onClick={() => handlePreviosPage()}
          disabled={page == 1 ? true : false}
          className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            ></path>
          </svg>
          Previous
        </button>
        <div className="flex items-center gap-2 ">
          {pages.map((pageNumber) => (
            <button
              className={`${
                pageNumber == page ? "bg-gray-900" : ""
              } relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg  text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
              type="button"
              onClick={() => {
                handleChangePage(pageNumber);
              }}
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                {pageNumber}
              </span>
            </button>
          ))}
        </div>
        <button
          onClick={() => handleNextPage()}
          disabled={page === total}
          className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LoadMorePage;
