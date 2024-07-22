"use client";
import React, { useContext } from "react";

import { Spiner } from "../Message/Notification";
import MVLink from "../Location/Link";
import ContactAdmin from "../Contact";
import { ApiContext } from "@/context/api";
import { MyContext } from "@/context";
import { Icons } from "@/constant";
const SideBar = () => {
  const { seri, loadingSeri }: any = useContext(ApiContext) || {};
  const { state }: any = useContext(MyContext) || {};
  const sidebarWidth = state ? "w-1/12" : "w-2/12";
  return (
    <div className="block md:flex md:justify-center md:relative md:text-white">
      <div
        className={`p-2 fixed left-0 bottom-0 top-0 bg-[#00000038] bg-opacity-37 z-9 md:p-4 lg:p-5 ${sidebarWidth}`}
      >
        <div
          className={`flex gap-x-1 items-center justify-${
            state ? "center" : "start"
          }`}
        >
          <div className={`${state ? "hidden" : "block text-white"} sm:block`}>
            <MVLink to={"/"}>
              <div className="font-medium text-sm mb-1">Hhtrungquoc.tv</div>
            </MVLink>
            <MVLink to={"/"}>
              <div className="text-xs font-normal">tromphim.netify.app</div>
            </MVLink>
          </div>
        </div>
        <div className="mt-[50px]">
          {!loadingSeri ? (
            <div className="sideBarActive">
              {seri &&
                seri.map((item:any, index:number) => (
                  <MVLink
                    title={item.name}
                    to={
                      item.path === "/"
                        ? item.path
                        : item.path + "/" + `${item._id}`
                    }
                    key={index}
                  >
                    <div
                      className={`flex p-2.5 my-2 items-end justify-${
                        state ? "center" : "start"
                      } gap-x-2 hover:bg-[#1f1f22] hover:rounded hover:cursor-pointer hover:text-white`}
                    >
                      <div className="text-[#d9d9d9] text-xs md:text-sm lg:text-base">
                        {Icons[index]}
                      </div>
                      <div
                        className={`${
                          state ? "hidden" : "block"
                        } sm:hidden lg:block`}
                      >
                        {item.name}
                      </div>
                    </div>
                  </MVLink>
                ))}
            </div>
          ) : (
            <Spiner size="large" />
          )}
        </div>
        <ContactAdmin />
      </div>
    </div>
  );
};

export default SideBar;
