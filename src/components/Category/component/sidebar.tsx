import MVImage from "../../MV/IMAGE";
import MVLink from "../../Location/Link";
import Title from "../../MV/Title";
import { fetchProductsCategory } from "@/sevices/products/productsSevices";
import { TrendingUp } from 'lucide-react';

const CategoryProductSidebar = async () => {
  const { data, error } = await fetchProductsCategory();
  if (error) {
    return <div>An error occurred: {error}</div>;
  }
  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div className="bg-gradient-to-l from-[#1c1c22] to-[#2c2c34] rounded-xl p-4">
      <Title icon={<TrendingUp size={24} />}>
        Xem nhiều
      </Title>
      <div className="space-y-4">
        {data &&
          data.map((item: any, index: number) => (
            <div key={index} className="group">
              <MVLink
                prefetch={false}
                to={`/q/${item.slug}`}
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="relative w-3/12 h-24 overflow-hidden rounded-lg">
                  <MVImage
                    width={200}
                    height={200}
                    src={item.linkImg}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className={`flex-1 h-16`}>
                  <h3 className="text-sm font-semibold text-gray-100 mb-2 line-clamp-2 group-hover:text-[#FFD875] transition-colors duration-300">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="text-sm text-gray-400">
                      <span className="text-gray-300">{item.sumSeri && `T: ${item.sumSeri}`}</span>
                     {item.sumSeri && <span className="mx-2">•</span>}
                      <span>{item.quality}</span>
                      <span className="mx-2">•</span>
                      <span>Tập {item.time}</span>
                    </div>
                  </div>
                </div>
              </MVLink>
              {index < data.length - 1 && (
                <div className="border-t border-gray-700/50 mx-3"></div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryProductSidebar;
