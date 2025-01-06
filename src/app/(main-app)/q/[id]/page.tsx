import { fetchCategories } from "@/app/sevices/categorySevices";
import { Metadata } from "next";
import MVImage from "@/app/components/MV/IMAGE";
import SeriNumberMovie from "@/app/components/Seri/SeriCategory";
import ShowDescriptions from "@/app/components/ShowContent/showDescriptions";
import Comments from "@/app/components/Comments";
import { Badge } from "@/components/ui/badge";
import MVLink from "@/app/components/Location/Link";
import { Icategory } from "@/interfaces/category";
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const category: Icategory = await fetchCategories(id);
  const lastCategory: any = category?.products[0];
  return {
    title:
      category?.isMovie == "drama"
        ? category.name +
          ` | Tập ${lastCategory.seri} - Tập ${
            Number(lastCategory.seri) + 1
          } - Tập ${Number(lastCategory.seri) + 2}`
        : category?.name,

    description: category.des,
    openGraph: {
      images: category.linkImg,
      type: "video.movie",
      url: `https://hoathinhtrungquoc.site/q/${category.slug}`,
    },
  };
}

const CategoryPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const category: any = await fetchCategories(id);
  if (!id) {
    return <div className="error">Invalid category ID</div>; // Xử lý trường hợp không có ID
  }
  return (
    <>
      <div className="text-white bg-gradient-to-b from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row gap-6 lg:items-start items-center">
          {/* Hình ảnh anime */}
          <div className="w-full md:w-1/2 lg:w-1/4">
            <div className="relative mx-auto">
              <MVImage
                title={category.name}
                src={category?.linkImg}
                alt={category?.name}
                width={300}
                height={400}
                className="rounded-lg object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            {category.isMovie === "drama" && (
              <MVLink
                prefetch={false}
                to={`/d/${
                  category?.products[category.products.length - 1]?.slug
                }`}
              >
                <button className="mt-4 bg-yellow-600 hover:bg-yellow-500 text-white w-full font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300">
                  ► Xem Ngay
                </button>
              </MVLink>
            )}
          </div>

          {/* Thông tin anime */}
          <div className="w-full lg:w-3/4 space-y-4">
            <h1 className="text-2xl md:text-3xl font-extrabold text-yellow-400 text-center lg:text-left">
              {category.name}
            </h1>
            <p className="text-sm text-gray-400 text-center lg:text-left">
              <span className="font-semibold text-yellow-500">22.1M</span> Lượt
              xem | Cập nhật lúc{" "}
              <span className="text-yellow-500">{category.hour || "10h"}</span>{" "}
              mỗi {category?.week?.name || "ngày"}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-sm text-gray-300">
              <div className="flex items-center">
                <span className="font-semibold">Tổng:</span>
                <Badge
                  variant="secondary"
                  className="ml-2 bg-yellow-500 text-black"
                >
                  {category?.sumSeri || "0"} Tập
                </Badge>
              </div>
              <div className="flex items-center">
                <span className="font-semibold">Thời Lượng:</span>
                <Badge
                  variant="secondary"
                  className="ml-2 bg-blue-500 text-white"
                >
                  {category?.time || "N/A"}
                </Badge>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 items-center">
              <span className="text-sm font-semibold">Thể Loại:</span>
              <span className="bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-md">
                Anime
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-md">
                {category.type || "N/A"}
              </span>
            </div>

            {/* Đánh giá */}
            <div className="md:flex items-center justify-center lg:justify-start ">
              <span className="text-gray-400 font-semibold">Đánh giá: </span>
              <div className="flex">
                <div className="flex md:ml-3 ">
                  {[...Array(10)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${
                        i < 8 ? "text-yellow-400" : "text-gray-600"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-400">
                  (10 điểm / 11 lượt)
                </span>
              </div>
            </div>

            {category.isMovie !== "drama" && (
              <MVLink
                prefetch={false}
                to={`/d/${
                  category?.products[category.products.length - 1]?.slug
                }`}
              >
                <button className="bg-yellow-600 hover:bg-yellow-500 w-full lg:w-auto text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                  ► Xem Ngay
                </button>
              </MVLink>
            )}

            <SeriNumberMovie data={category} />
          </div>
        </div>

        {/* Nội dung phim */}
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2 text-yellow-400 text-center lg:text-left">
            Nội dung phim
          </h2>
          <div className="bg-gray-800 p-4 rounded-lg shadow-inner">
            <ShowDescriptions content={category.des} />
          </div>
        </div>
      </div>

      <Comments id={category?._id} />
    </>
  );
};

export default CategoryPage;
