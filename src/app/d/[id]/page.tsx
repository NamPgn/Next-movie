import { notFound } from "next/navigation";
import { Result } from "antd";
import "./style.css"; // Nhúng tệp CSS
import CryptoJS from "crypto-js";
import {
  fetchProduct,
} from "@/app/sevices/productsSevices";
import ShowDescriptions from "@/app/components/ShowContent/showDescriptions";
import { Metadata, ResolvingMetadata } from "next";
import SeriDetailProducts from "@/app/components/Seri/SeriDetail";
// import { useSearchParams } from "next/navigation";
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};


export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const category: any = await fetchProduct(id);

  return {
    title: category.name + " Tập " + category.seri,
    description: category.des,
    openGraph: {
      images: category.linkImg,
    },
  };
}
const DetailWatched = async ({
  params,
}: {
  params: { id: string; c: string };
}) => {

  // Fetch dữ liệu từ server
  const getOneProductDetail: any = await fetchProduct(params.id);
  if (!getOneProductDetail) {
    notFound(); // Trả về lỗi 404 nếu không tìm thấy dữ liệu
  }
  
  const secretKey =
    process.env.NEXT_PUBLIC_SECERT_CRYPTO_KEY_PRODUCTS_DAILYMOTION_SERVER;
  const decryptedText = CryptoJS.AES.decrypt(
    getOneProductDetail.dailyMotionServer
      ? getOneProductDetail.dailyMotionServer
      : "",
    secretKey ? secretKey : ""
  ).toString(CryptoJS.enc.Utf8);

  const VideoPlayer = () => (
    <div className="movie relative">
      {getOneProductDetail.dailyMotionServer !== "" &&
      getOneProductDetail.server2 !== "" ? (
        <iframe
          allowFullScreen
          title="vimeo-player"
          className="absolute"
          src={decryptedText}
          style={{ width: "100%", height: "100%" }}
        />
      ) : getOneProductDetail.trailer !== "" ? (
        <iframe
          title="vimeo-player"
          className="absolute"
          style={{ width: "100%", height: "100%" }}
          src={`${getOneProductDetail.trailer}?autoplay=1&mute=1`}
        />
      ) : (
        <Result
          icon={"Hiiiii!!"}
          className="absolute inset-0 text-white mt-5"
          subTitle="Phim này đang trong quá trình cập nhật video. Vui lòng quay lại sau."
        />
      )}
    </div>
  );
  return (
    // <div className="bg-black text-white min-h-screen">
    //   <div className="movie relative">
    //     {getOneProductDetail.dailyMotionServer !== "" &&
    //     getOneProductDetail.server2 !== "" ? (
    //       <iframe
    //         allowFullScreen
    //         title="vimeo-player"
    //         className="absolute"
    //         src={decryptedText}
    //         style={{ width: "100%", height: "100%" }}
    //       />
    //     ) : getOneProductDetail.trailer !== "" ? (
    //       <iframe
    //         title="vimeo-player"
    //         className="absolute"
    //         style={{ width: "100%", height: "100%" }}
    //         src={`${getOneProductDetail.trailer}?autoplay=1&mute=1`}
    //       />
    //     ) : (
    //       <Result
    //         icon={"Hiiiii!!"}
    //         className="absolute inset-0 text-white mt-5"
    //         subTitle="Phim này đang trong quá trình cập nhật video. Vui lòng quay lại sau."
    //       />
    //     )}
    //   </div>
    //   <div className="bg-gray-800 p-4">
    //     <div className="flex justify-between items-center mb-4">
    //       <div className="flex space-x-2">
    //         <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
    //           Tập trước
    //         </button>
    //         <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
    //           Tập tiếp theo
    //         </button>
    //       </div>
    //       <div className="flex space-x-2">
    //         <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
    //           Mở rộng
    //         </button>
    //         <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
    //           Tắt đèn
    //         </button>
    //       </div>
    //     </div>

    //     <div className="flex items-center space-x-2 mb-4">
    //       <div className="w-6 h-6 bg-red-500 rounded-sm flex items-center justify-center">
    //         <svg
    //           className="w-4 h-4 text-white"
    //           fill="none"
    //           stroke="currentColor"
    //           viewBox="0 0 24 24"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth={2}
    //             d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    //           />
    //         </svg>
    //       </div>
    //       <h1 className="text-lg font-bold">
    //         Thiếu Niên Bạch Mã Túy Xuân Phong Tập 24 Vietsub
    //       </h1>
    //     </div>

    //     <div className="inline-block bg-gray-700 px-3 py-1 rounded mb-4">
    //       FULL HD
    //     </div>

    //     <div className="">
    //       {/* <SeriDetailProducts seriProducts={productByCategory} /> */}

    //     </div>

    //     <div className="mt-4 flex flex-wrap gap-2">
    //       {[
    //         "hhanime3d",
    //         "hhanime3d tv",
    //         "Hoạt hình Anime 3d",
    //         "Hoạt hình Anime",
    //         "Thiếu Niên Bạch Mã Túy Xuân Phong",
    //         "Shao Nian Bai Ma Zui Chun Feng",
    //       ].map((tag, i) => (
    //         <span key={i} className="bg-gray-700 px-2 py-1 rounded text-sm">
    //           {tag}
    //         </span>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div className="bg-gray-900 text-white">
      <div className="flex justify-between mb-4">
        <div>
          <span className="text-orange-500 mr-2">
            Đổi Link nếu ko xem được:
          </span>
          <button className="bg-orange-500 text-white px-2 py-1 rounded mr-2">
            Link 1
          </button>
          <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
            Link 2
          </button>
          <button className="bg-blue-500 text-white px-2 py-1 rounded">
            Link 3
          </button>
        </div>
      </div>

      <div className="flex">
        <div>
          <VideoPlayer />
          <div className="flex justify-between my-4">
            <div>
              <button className="bg-blue-600 text-white px-3 py-1 rounded mr-2">
                Tập trước
              </button>
              <button className="bg-blue-600 text-white px-3 py-1 rounded mr-2">
                Tập tiếp theo
              </button>
            </div>
            <div>
              <button className="bg-blue-600 text-white px-3 py-1 rounded mr-2">
                Mở rộng
              </button>
              <button className="bg-blue-600 text-white px-3 py-1 rounded">
                Tắt đèn
              </button>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="w-6 h-6 bg-red-500 rounded-sm flex items-center justify-center mr-2">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h1 className="text-xl font-bold">{getOneProductDetail.name}</h1>
          </div>
          <SeriDetailProducts productId={getOneProductDetail._id} seriProducts={getOneProductDetail?.category?.products} />
          <ShowDescriptions content={getOneProductDetail?.category?.des} />
        </div>
      </div>
    </div>
  );
};

export default DetailWatched;
