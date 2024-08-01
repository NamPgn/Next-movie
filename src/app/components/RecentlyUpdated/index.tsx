import { ArrowRightOutlined } from "@ant-design/icons";
import CategoryContents from "../Category/Content/Category";
import MVLink from "../Location/Link";

export default function RecentlyUpdated({ data }: any) {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h2 className="text-orange-500 text-xl font-bold mb-4">MỚI CẬP NHẬT</h2>
        <MVLink to={"/loadmore"}>
          <div className="text-[16px] text-[#fff] flex lg:text-[20px] md:text-[18px] gap-3 justify-center">
            <span className="underline">See More</span>
          </div>
        </MVLink>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data &&
          data.map((item: any, index: number) => {
            return (
              <CategoryContents
                key={item._id}
                time={item.time}
                title={item.name}
                image={item.linkImg}
                link={"/q/" + item._id}
                products={item.product}
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
