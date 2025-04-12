import { Icategory } from "@/interfaces/category";
import MVLink from "../Location/Link";
import dynamic from "next/dynamic";
import Title from "../MV/Title";
import { IoFilmOutline } from "react-icons/io5";
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
      <div className="flex justify-between items-center mb-2">
        <Title icon={<IoFilmOutline />}>{title}</Title>
        <div className="group relative">
          <MVLink
            prefetch={false}
            to={"/loadmore"}
            aria-label="Xem thêm"
            title="Xem thêm"
            className="flex items-center gap-1 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-full text-gray-400 hover:text-white transition-all duration-300"
          >
            <span className="text-sm font-medium">Xem thêm</span>
            <svg
              viewBox="0 0 24 24" 
              fill="none"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </MVLink>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
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
    </div>
  );
}
