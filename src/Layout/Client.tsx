// src/components/LayoutWebsite.tsx
"use client";

import React, { useContext } from "react";
import Header from "../components/Teamplates/Header";
import Footer from "../components/Teamplates/Footer";
import SideBar from "../components/SideBar";
import { MyContext } from "../context";
import Main from ".";

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
