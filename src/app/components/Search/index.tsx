"use client";

import React from "react";
import MVLink from "../Location/Link";
import MVImage from "../MV/IMAGE";
export interface SuggestionItem {
  NAME: string;
  URL: string;
}
interface SearchResultsProps {
  data: any[];
  handleClick: (search?: string) => void;
  popularSearches?: SuggestionItem[];
  searchValue?: string;
  isFocused?: boolean;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  data,
  handleClick,
  popularSearches = [],
  searchValue = "",
  isFocused,
}) => {
  if (searchValue === "") {
    return (
      ''
    );
  }

  return (
    <div className="absolute top-[50px] left-0 right-0 max-h-[400px] scroll-container overflow-y-scroll lg:left-0 w-full flex flex-col bg-[#2f2f33] shadow-lg rounded-xl z-10">
      <div className="p-4 flex flex-col gap-2 font-sans text-base font-normal text-blue-gray-700 ">
        {searchValue.trim() ? (
          data.length > 0 ? (
            data.map((item: any) =>{
              return  <MVLink prefetch={false} to={`/q/${item.slug}`} key={item._id}>
              <div className="flex items-center gap-4 p-4 w-full max-w-full transition-all rounded-lg bg-[#2c2c2f] text-start hover:bg-[#1c1c1d] hover:text-white active:bg-blue-900">
                {/* Hình ảnh minh họa */}
                <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-gray-500">
                  <MVImage
                    src={item.linkImg || "/default-thumbnail.png"}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    width={150}
                    height={100}
                  />
                </div>

                <div className="flex-1 overflow-hidden">
                  <h3 className="text-base font-semibold text-white truncate max-w-[250px]">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-400 max-w-[280px] line-clamp-2 overflow-hidden">
                    {`FULL ${item.quality}/4K/Thuyết Minh` ||
                      "Không có mô tả chi tiết."}
                  </p>

                  <div className="flex items-center gap-2 mt-1 text-sm text-yellow-400">
                    <span className="truncate">
                      {item.type || "Thể loại không xác định"}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span>
                      {item.views
                        ? `${item.views.toLocaleString()} lượt xem`
                        : "0 lượt xem"}
                    </span>
                  </div>
                </div>
              </div>
            </MVLink>
            })
          ) : (
            <div className="p-4 text-center text-sm text-gray-400">
              Không tìm thấy kết quả phù hợp.
            </div>
          )
        ) : (
          <div className="p-2">
            <p className="text-gray-300 text-sm">Gợi ý tìm kiếm phổ biến:</p>
            <div className="mt-2 flex flex-wrap gap-2 gap-y-5">
              {popularSearches?.map((search, index) => (
                <MVLink key={index} prefetch={false} to={search.URL || "#"}>
                  <span className="bg-[#444] text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-[#666]">
                    {search.NAME}
                  </span>
                </MVLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
