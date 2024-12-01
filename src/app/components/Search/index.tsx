"use client";

import React from "react";
import MVLink from "../Location/Link";
const SearchResults = ({ data, handleClick }: any) => {
  return data.length > 0 ? (
    <div className="absolute top-[50px] left-0 w-full flex flex-col text-gray-white bg-[#2f2f33] shadow-md rounded-xl bg-clip-border z-10">
      <div className="p-4 flex min-w-[240px] flex-col gap-1 font-sans text-base font-normal text-blue-gray-700">
        {data.map((item: any) => (
          <MVLink
            prefetch={false}
            to={`/q/${item.slug}`}
            key={item._id}
            onClick={() => handleClick()}
          >
            <div className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-[#1c1c1d] hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
              {item.name}
            </div>
          </MVLink>
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default SearchResults;
