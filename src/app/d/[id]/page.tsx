import { notFound } from "next/navigation";
import "./style.css"; // Nhúng tệp CSS
import CryptoJS from "crypto-js";
import { fetchProduct } from "@/app/sevices/productsSevices";
import ShowDescriptions from "@/app/components/ShowContent/showDescriptions";
import { Metadata, ResolvingMetadata } from "next";
import SeriDetailProducts from "@/app/components/Seri/SeriDetail";
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const res: any = await fetchProduct(id);
  return {
    title: res.category.name + " Tập " + res.seri,
    description: res.category.des,
    openGraph: {
      images: res.category.linkImg,
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
        "Phim này đang trong quá trình cập nhật video. Vui lòng quay lại sau."
      )}
    </div>
  );
  return (
    <div className="text-white">
      <div className="p-4 rounded-lg">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <span className="text-orange-500 font-medium mb-2 sm:mb-0 sm:mr-4">
            Đổi Link nếu ko xem được:
          </span>
          <div className="flex space-x-2">
            <button className="bg-gray-800 text-orange-500 px-3 py-1 rounded hover:bg-gray-700 transition duration-300 ease-in-out">
              Link 1
            </button>
            <button className="bg-gray-800 text-orange-500 px-3 py-1 rounded hover:bg-gray-700 transition duration-300 ease-in-out">
              Link 2
            </button>
            <button className="bg-gray-800 text-orange-500 px-3 py-1 rounded hover:bg-gray-700 transition duration-300 ease-in-out">
              Link 3
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        <div>
          <VideoPlayer />

          <SeriDetailProducts
            productId={getOneProductDetail._id}
            seriProducts={getOneProductDetail?.category?.products}
            name={getOneProductDetail.name}
          />
          <ShowDescriptions content={getOneProductDetail?.category?.des} />
        </div>
      </div>
    </div>
  );
};

export default DetailWatched;
