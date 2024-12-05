import React, { memo } from "react";
import MVLink from "../../Location/Link";
import { PlayCircleOutlined } from "@ant-design/icons";
import MVImage from "../../MV/IMAGE";

interface CategoryContent {
  text?: string;
  title: string;
  link?: any;
  image?: string;
  sumSeri?: any;
  time?: string;
  typecm?: string;
  year?: string;
  products?: [];
}

const CategoryContents = memo(
  ({
    title,
    link,
    image,
    sumSeri,
    time,
    typecm,
    year,
    products,
  }: CategoryContent) => {
    const lastItem: any = products ? products[products.length - 1] : "";
    return (
      <div className="w-full ">
        <div className="relative group rounded-md overflow-hidden">
          <MVLink to={link} prefetch={true} className="relative ">
            <MVImage
              src={image}
              alt={title}
              width={300}
              height={400}
              className="w-full h-[272px] md:h-[300px] lg:h-[300px] transition-opacity duration-300 group-hover:opacity-40  object-cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
            />
            {/* Tag Tập */}
            <div
              style={{
                background:
                  "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
              }}
              className="absolute top-2 left-2 text-white text-xs rounded-[4px] px-2 py-1 font-medium"
            >
              {lastItem ? `Tập ${lastItem.seri}` : "Trống"}
            </div>
            {/* Nút Play */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
              <PlayCircleOutlined className="text-white text-5xl" />
            </div>
            {/* Tiêu đề */}
            <div
              className="absolute bottom-0 w-full left-0 right-0 text-white text-sm font-bold px-2 pt-5 pb-2 line-clamp-1 shadow-lg"
              style={{
                background:
                  "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Tùy chỉnh shadow
              }}
            >
              {title}
            </div>
          </MVLink>
        </div>
        {/* Thông tin bổ sung */}
        {/* <div className="mt-4">
          <div className="text-sm text-gray-400 mt-2">
            <div className="font-semibold sm:text-[12px] md:text-[13px] lg:text-[14px]">
              {sumSeri ? `${sumSeri} Tập` : ""}
            </div>
            <div className="flex items-center mt-1 justify-between">
              <p className="mr-2 text-gray-300 sm:text-[12px] md:text-[13px] lg:text-[14px]">
                Full HD/Vietsub
              </p>
              <p className="mr-2 text-gray-300">{typecm}</p>
              <p className="text-gray-400 text-sm">{time}</p>
            </div>
            <div className="font-semibold mt-2">{year ? `${year}` : ""}</div>
          </div>
        </div> */}
      </div>
    );
  }
);

export default CategoryContents;
