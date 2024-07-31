import { ArrowRightOutlined } from "@ant-design/icons";
import MVLink from "../../Location/Link";
import { Icategory } from "@/interfaces/category";
import RecentlyUpdated from "../../RecentlyUpdated";
interface ApiResponse {
  data: Icategory[];
}
async function fetchCategories(page: number): Promise<Icategory[]> {
  const response: any = await (
    await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categorys?page=` + page)
  ).json(); // Thay đổi URL theo API của bạn

  if (!response || !response.data) {
    throw new Error("Failed to fetch");
  }
  return response.data;
}
const CategoryHomePage = async () => {
  const data: any = await fetchCategories(1);
  return (
    <div>
      <div className="flex justify-between items-center">
        {/* <MVLink to={"/loadmore"}>
          <div className="text-[16px] text-[#fff] flex lg:text-[20px] md:text[18px] gap-3">
            <span className="underline">See More</span>
            <span>
              <ArrowRightOutlined />
            </span>
          </div>
        </MVLink> */}
      </div>
      <div className="">
        <div className="">
          <RecentlyUpdated data={data} />
        </div>
        <div>{/* <MostViewed /> */}</div>
      </div>
    </div>
  );
};

export default CategoryHomePage;
