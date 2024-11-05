import { fetchCategories } from "@/app/sevices/categorySevices";
import { Metadata } from "next";
import MVImage from "@/app/components/MV/IMAGE";
import SeriNumberMovie from "@/app/components/Seri/SeriCategory";
import ShowDescriptions from "@/app/components/ShowContent/showDescriptions";
import Comments from "@/app/components/Comments";
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const category: any = await fetchCategories(id);

  return {
    title: category.name,
    description: category.des,
    openGraph: {
      images: category.linkImg,
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
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3">
            <div className="relative">
              <MVImage
                src={category?.linkImg}
                alt={category?.name}
                width={300}
                height={450}
                className="rounded-lg w-full"
              />
              <div className="absolute top-2 left-2 bg-red-500 p-1 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white py-2 px-4 rounded-full font-bold">
                ► Xem phim
              </button>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-lg font-bold mb-2">{category.name}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
              <span> {category.time}</span>
              <span className="bg-blue-600 text-white px-2 py-1 rounded">
                {category.sumSeri} Tập
              </span>
            </div>
            <div className="mb-2">
              <span className="text-gray-400">Thể Loại: </span>
              <span>{category.type}</span>
            </div>
            <div className="flex items-center mb-4">
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
            <div className="bg-gray-800 inline-block px-3 py-1 rounded mb-4">
              FULL HD
            </div>

            <SeriNumberMovie data={category} />
            <div>
              <h2 className="text-xl font-bold text-orange-500 mb-2 mt-2">
                NỘI DUNG PHIM
              </h2>
              <h3 className="font-bold mb-2">{category.name}</h3>
              <ShowDescriptions content={category.des} />
              <button className="text-blue-400 mt-2">Mở rộng</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
