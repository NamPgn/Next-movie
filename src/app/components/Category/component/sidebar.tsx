import { fetchProductsCategory } from "@/app/sevices/productsSevices";
import MVImage from "../../MV/IMAGE";
import MVLink from "../../Location/Link";
import Title from "../../MV/Title";

const CategoryProductSidebar = async () => {
  const { data, error } = await fetchProductsCategory();
  if (error) {
    return <div>An error occurred: {error}</div>;
  }
  return (
    <>
      <Title>xem nhiều</Title>
      <div className="space-y-2">
        {data &&
          data.map((items: any, index: number) => (
            <MVLink to={"/q/" + items.slug} key={index}>
              <div className="flex gap-2 mb-2 ">
                <div className="w-5/12 ">
                  <MVImage
                    title={items.name}
                    src={items.linkImg}
                    alt={items.des}
                    width={140}
                    height={140}
                    className="w-auto h-auto rounded-sm"
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
