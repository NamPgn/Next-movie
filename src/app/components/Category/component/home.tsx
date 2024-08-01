import RecentlyUpdated from "../../RecentlyUpdated";
import { fetchCategories } from "@/app/sevices/categorySevices";

const CategoryHomePage = async () => {
  const data: any = await fetchCategories(1);
  return (
    <div>
      <RecentlyUpdated data={data} />
    </div>
  );
};

export default CategoryHomePage;
