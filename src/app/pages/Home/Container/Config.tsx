"use client";
import React, { memo, useContext } from "react";
import { useSWRWithAxios } from "../../../../hook/Swr";
import { urlSwr } from "../../../function";
import { MyContext } from "../../../../context";
import { Loading, MessageErr } from "@/app/components/Message/Notification";
import LazyLoadOtherComponents from "@/app/components/LazyOtherComponents";
import dynamic from "next/dynamic";
const LatesCategory = dynamic(
  () => import("@/app/components/Category/component/latest"),
  {
    loading: () => <Loading />,
  }
);
const CategoryProductSidebar = dynamic(
  () => import("@/app/components/Category/component/sidebar"),
  {
    loading: () => <Loading />,
  }
);
const WeekComponent = dynamic(() => import("@/app/components/Week"), {
  loading: () => <Loading />,
});
const CategoryHomePage = dynamic(
  () => import("@/app/components/Category/component/home"),
  {
    loading: () => <Loading />,
  }
);

const ConfigHomePage = memo(() => {
  const { data: trailer, isError: ErrTrailer }: any = useSWRWithAxios(
    urlSwr + `/trailer`
  );
  const { state }: any = useContext(MyContext) || {};
  if (ErrTrailer) {
    return <MessageErr />;
  }
  return (
    <div className={state ? "p-3" : "mt-3"}>
      <div className="d-flex">
        <div className="lg:w-9/12 md:w-12/12 sm:w-full">
          <div className="h-full">
            <div className="relative pb-[60%] md:pb-[50%] lg:pb-[45%] md:mx-2">
              <video
                className="h-full absolute bg-black rounded"
                width="100%"
                loop
                muted
                autoPlay
                controls
                src={trailer.url}
              />
            </div>
            <LatesCategory />
          </div>
        </div>
        <CategoryProductSidebar />
      </div>
      <WeekComponent />
      <LazyLoadOtherComponents>
        <CategoryHomePage />
      </LazyLoadOtherComponents>
    </div>
  );
});

export default ConfigHomePage;
