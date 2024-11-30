import { fetchProductsCategory } from "@/app/sevices/productsSevices";
import MVImage from "../../MV/IMAGE";
import MVLink from "../../Location/Link";
import Title from "../../MV/Title";

const CategoryProductSidebar = async () => {
  const { data, error } = await fetchProductsCategory();
  if (error) {
    return <div>An error occurred: {error}</div>;
  }
  const colors = [
    "border-red-500",
    "border-blue-500",
    "border-green-500",
    "border-yellow-500",
  ];
  const colorsTrend = ["red-500", "blue-500", "green-500", "yellow-500"];
  const iconTrend = [
    <svg
      key="icon-1"
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
    >
      <path d="M10 10.414l4 4 5.707-5.707L22 11V5h-6l2.293 2.293L14 11.586l-4-4-7.707 7.707 1.414 1.414z" />
    </svg>,
    <svg
      key="icon-2"
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
    >
      <path d="M10 10.414l4 4 5.707-5.707L22 11V5h-6l2.293 2.293L14 11.586l-4-4-7.707 7.707 1.414 1.414z" />
    </svg>,
    <svg
      key="icon-3"
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
    >
      <path d="M10 10.414l4 4 5.707-5.707L22 11V5h-6l2.293 2.293L14 11.586l-4-4-7.707 7.707 1.414 1.414z" />
    </svg>,
  ];
  return (
    <>
      <Title>xem nhiều</Title>
      <div className="space-y-4 p-2 bg-[#2a2c31] rounded-lg">
        {data &&
          data.map((item: any, index: number) => (
            <div key={index}>
              <MVLink
                to={`/q/${item.slug}`}
                className="flex items-start gap-4 p-2 rounded-lg hover:bg-gray-700 transition-all duration-300"
              >
                {/* Hình ảnh */}
                <div className="w-4/12 h-32">
                  <MVImage
                    width={200}
                    height={200}
                    src={item.linkImg}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-md shadow-md"
                  />
                </div>

                {/* Nội dung */}
                <div
                  className={`flex-1 border-l-4 h-16 pl-4 ${
                    colors[index % colors.length]
                  }`}
                >
                  <h3 className="text-sm font-semibold text-gray-100 mb-2 line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-1">{item.type}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-400 flex items-center gap-1">
                      <svg
                        viewBox="0 0 1024 1024"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                      >
                        <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z" />
                      </svg>
                      <div className=" mt-[2px]">{item.year}</div>
                    </div>
                    <div
                      className={`text-${
                        colorsTrend[index]
                      }`}
                    >
                      {iconTrend[index]}
                    </div>
                  </div>
                </div>
              </MVLink>

              {/* Đường kẻ ngăn cách */}
              <div className="border-t border-gray-700 mt-2"></div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CategoryProductSidebar;
