"use client"

import { Loading } from "@/app/components/Message/Notification";
import dynamic from "next/dynamic";
import React from "react";
const Loadmore = dynamic(() => import("@/app/components/Loadmore"), {
  loading: () => <Loading />,
});
const index = () => {
  return <Loadmore />;
};

export default index;
