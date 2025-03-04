import { Icategory } from "@/interfaces/category";
import MVLink from "../Location/Link";
import dynamic from "next/dynamic";
import Title from "../MV/Title";
import { FaArrowRight } from "react-icons/fa6";
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
          prefetch={false}
          to={"/loadmore"}
          aria-label="Tải thêm nội dung"
          title="Tải thêm nội dung"
        >
          <button className="bg-blue-500 text-white flex gap-2 items-center font-bold py-1 px-1 text-xs rounded hover:bg-blue-600">
            {loadmore}
          </button>
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
    </div>
  );
}
