// src/components/LayoutWebsite.tsx
"use client";

import React, { useContext } from "react";
import { MyContext } from "../context";
import SideBar from "@/app/components/SideBar";
import Main from ".";
import Header from "@/app/components/Teamplates/Header";
import Footer from "@/app/components/Teamplates/Footer";

const LayoutWebsite = ({ children }: { children: React.ReactNode }) => {
  const { state } = useContext(MyContext) || {};

  return (
    <Main>
      <Header />
      <div className="containers flex">
        <div className={state ? "w-1/12" : "w-2/12"}>
          <SideBar />
        </div>
        <div className={`${state ? "w-11/12" : "w-10/12"} p-2`}>{children}</div>
      </div>
      <Footer />
    </Main>
  );
};

export default LayoutWebsite;
