import { Icategory } from "@/interfaces/category";
import CategoryContents from "../Category/Content/Category";
import MVLink from "../Location/Link";

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
  const linkText = loadmore || `Xem thêm ${title}`;
  const linkDescription = `Xem thêm nội dung về ${title}`;
  return (
    <section>
      <div className="flex justify-between items-center">
        <h2 className="text-orange-500 text-xl font-bold mb-4">{title}</h2>
        <MVLink
          to="/loadmore"
          aria-label={linkText}
          title={linkDescription}
        >
          <div className="text-[16px] text-[#fff] flex lg:text-[20px] md:text-[18px] gap-3 justify-center">
            <span className="underline">{loadmore || `Xem thêm ${title}`}</span>
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
                link={"/q/" + item._id}
                products={item.products}
                typecm={item.typecm}
                text={item.text}
                sumSeri={item.sumSeri}
                year={item.year}
              />
            );
          })}
      </div>
    </section>
  );
}
