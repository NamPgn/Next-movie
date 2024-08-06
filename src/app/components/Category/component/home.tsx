import RecentlyUpdated from "../../RecentlyUpdated";
import { fetchCategorysRecentllyUpdated } from "@/app/sevices/categorySevices";

const CategoryHomePage = async () => {
  const { data, error }: any = await fetchCategorysRecentllyUpdated();
  if (error) {
    return <div>An error occurred: {error}</div>;
  }
  return (
    <div>
      <RecentlyUpdated data={data} title="MỚI CẬP NHẬT" loadmore="SEE MORE" />
    </div>
  );
};

export default CategoryHomePage;
