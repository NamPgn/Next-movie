import RecentlyUpdated from "../../RecentlyUpdated";
import { fetchCategories } from "@/app/sevices/categorySevices";

const CategoryHomePage = async () => {
  const { data, error }: any = await fetchCategories();
  // if (error) {
  //   return <div>An error occurred: {error}</div>;
  // }
  return (
    <div>
      <RecentlyUpdated data={data} />
    </div>
  );
};

export default CategoryHomePage;
