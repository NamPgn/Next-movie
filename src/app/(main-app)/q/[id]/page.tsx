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
      <div className="text-white ">
        <div className="flex flex-col lg:flex-row gap-6 lg:items-start items-center">
          {/* Hình ảnh anime */}
          <div className="md:w-3/12 w-1/4">
            <div className="relative lg:p-0 md:w-full mx-auto">
              <MVImage
                title={category.name}
                src={category?.linkImg}
                alt={category?.name}
                width={300}
                height={300}
                className="rounded-lg h-full"
                objectFit="cover"
              />
            </div>
            {category.isMovie == "drama" && (
              <MVLink
                prefetch={false}
                to={
                  "/d/" + category?.products[category.products.length - 1]?.slug
                }
              >
                <button className="mt-4 bg-[#ca8a04] text-white text-xs w-full font-semibold py-2 px-2 rounded md:text-sm md:py-3 md:px-6">
                  ► Xem Ngay
                </button>
              </MVLink>
            )}
          </div>

          {/* Thông tin anime */}
          <div className="w-full lg:w-9/12 ">
            <h1 className="text-lg font-bold">{category.name}</h1>
            <p className="text-sm text-gray-500 my-1">
              22.1M Lượt xem | Cập nhật lúc{" "}
              {category.hour ? category.hour : "10h"} mỗi {category.week.name}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              <span> Tổng:</span>
              <Badge variant="secondary">{category.sumSeri} Tập</Badge>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              <span> Thời Gian:</span>
              <Badge variant="secondary">{category.time}</Badge>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2 ">
              <span className="text-gray-400">Thể Loại: </span>
              <span className="bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded">
                Anime
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded">
                {category.type}
              </span>

              {/* <Badge variant="secondary">{category.type}</Badge> */}
            </div>

            <div className="flex items-center mb-4 ">
              <span className="text-gray-400 mr-2">Đánh giá: </span>
              <div className="flex">
                {[...Array(10)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-400"
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
            {category.isMovie !== "drama" && (
              <MVLink
                prefetch={false}
                to={
                  "/d/" + category?.products[category.products.length - 1]?.slug
                }
              >
                <button className="bg-[#ca8a04] w-full md:w-auto text-white text-xs  font-semibold py-2 px-2 rounded md:text-sm md:py-3 md:px-6">
                  ► Xem Ngay
                </button>
              </MVLink>
            )}
            <SeriNumberMovie data={category} />
          </div>
        </div>

        {/* Nội dung phim */}
        <div className="mt-5">
          <ShowDescriptions content={category.des} />
        </div>
      </div>
      <Comments id={category?._id} />
    </>
  );
};

export default CategoryPage;
