import { ArrowRightOutlined } from "@ant-design/icons";
import MVLink from "../../Location/Link";
import { Icategory } from "@/interfaces/category";
import RecentlyUpdated from "../../RecentlyUpdated";
import Image from "next/image";
import CategoryProductSidebar from "./sidebar";
interface ApiResponse {
  data: Icategory[];
}
async function fetchCategories(page: number): Promise<Icategory[]> {
  const response: any = await (
    await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/categorys?page=` + page
    )
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
      <RecentlyUpdated data={data} />
    </div>
  );
};

export default CategoryHomePage;
