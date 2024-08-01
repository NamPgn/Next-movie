import React, { memo } from "react";
import MVLink from "../../Location/Link";
import { PlayCircleOutlined } from "@ant-design/icons";
import MVImage from "../../MV/IMAGE";

interface CategoryContent {
  text?: string;
  title: string;
  link: any;
  image: string;
  sumSeri?: any;
  time: string;
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
      <div className="w-full">
        <div className="relative group">
          <MVLink to={link} className="block">
            <MVImage
              src={image}
              alt={title}
              width={100}
              height={100}
              className="h-[272px] md:h-[300px] lg:h-[300px] object-cover transition-opacity duration-300 group-hover:opacity-40 rounded-lg w-full"
            />
            <div
              style={{
                background:
                  "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
              }}
              className="absolute top-2 left-2  text-white text-xs rounded-[4px] px-2 py-1 font-medium"
            >
              {lastItem ? `Tập ${lastItem.seri}` : "Trống"}
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <PlayCircleOutlined className="text-white text-5xl" />
            </div>
          </MVLink>
        </div>
        <div className="mt-4">
          <MVLink to={link}>
            <h2
              style={{ color: "#fff" }}
              className="text-sm md:text-md lg:text-lg font-bold"
            >
              {title}
            </h2>
          </MVLink>
        </div>
        <div className="text-sm text-gray-400 mt-2">
          <div className="font-semibold sm:text-[12px] md:text-[13px] lg:text-[14px]">
            {sumSeri ? `${sumSeri} Tập` : ""}
          </div>
          <div className="flex items-center mt-1 justify-between">
            <p className="mr-2 text-gray-300 sm:text-[12px] md:text-[13px] lg:text-[14px]">
              Full HD/Vietsub
            </p>
            <p className="mr-2 text-gray-300">{typecm}</p>
            <p className="text-gray-400 text-sm">({time})</p>
          </div>
          <div className="font-semibold mt-2">{year ? `${year}` : ""}</div>
        </div>
      </div>
    );
  }
);

export default CategoryContents;
