import { Icategory } from "@/interfaces/category";
import MVLink from "../Location/Link";
import dynamic from "next/dynamic";
import WeekComponent from "../Week";
import Title from "../MV/Title";
const CategoryContents = dynamic(() => import("../Category/Content/Category"));
type CategoryContentType = {
  loadmore?: string;
  title: string;
  data: Icategory[];
};
export default function RecentlyUpdated({
  loadmore,
  title,
  data,
}: CategoryContentType) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <Title>{title}</Title>
        <MVLink
          to={"/loadmore"}
          aria-label="Tải thêm nội dung"
          title="Tải thêm nội dung"
        >
          <div
            className="flex items-center
             justify-center gap-2 px-4 py-2 text-sm md:text-md lg:text-lg font-medium
              text-white bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg cursor-pointer hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800 hover:shadow-xl hover:text-gray-100 transition-all duration-300"
            title="Xem tất cả"
          >
            <span className="decoration-wavy decoration-2">{loadmore}</span>
            <svg
              className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </MVLink>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data &&
          data.map((item: any) => {
            return (
              <CategoryContents
                key={item._id}
                time={item.time}
                title={item.name}
                image={item.linkImg}
                link={"/q/" + item.slug}
                products={item.products}
                typecm={item.typecm}
                text={item.text}
                sumSeri={item.sumSeri}
                year={item.year}
              />
            );
          })}
      </div>
      <WeekComponent title={"Lịch Chiếu"} />
    </div>
  );
}
