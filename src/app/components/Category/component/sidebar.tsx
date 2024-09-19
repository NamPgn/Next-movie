import { fetchProductsCategory } from "@/app/sevices/productsSevices";
import MVImage from "../../MV/IMAGE";
import MVLink from "../../Location/Link";

const CategoryProductSidebar = async () => {
  const { data, error } = await fetchProductsCategory();
  if (error) {
    return <div>An error occurred: {error}</div>;
  }
  return (
    <>
      <h2 className="text-orange-500 text-xl font-bold mb-4">XEM NHIỀU</h2>
      <div className="space-y-2">
        {data &&
          data.map((items: any, index: number) => (
            <MVLink to={"/q/" + items.slug} key={index}>
              <div className="flex gap-2 mb-2">
                <div className="w-5/12">
                  <MVImage
                    src={items.linkImg}
                    alt={items.des}
                    width={140}
                    height={140}
                    className="w-auto h-auto"     
                    object-fit="cover"
                  />
                </div>
                <div className="w-7/12">
                  <span className="text-sm">{items.name}</span>
                </div>
              </div>
            </MVLink>
          ))}
      </div>
    </>
  );
};

export default CategoryProductSidebar;
