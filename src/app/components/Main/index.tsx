
import { notFound } from "next/navigation";
import { Result, Spin } from "antd";
import "./style.css"; // Nhúng tệp CSS
import CryptoJS from "crypto-js";
import SeriDetailProducts from "@/app/components/Seri/SeriDetail";
// import { useSearchParams } from "next/navigation";
interface DetailComponentProps {
  params: { id: string; c: string };
}

async function fetchProduct(id: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/product/` + id);
  const data = await response.json();
  if (!response) {
    return undefined;
  }
  if (!response) {
    notFound();
  }

  return data;
}

async function fetchProductsCategory(id: string) {
  const response = await fetch(
    "http://localhost:8000/api/category/products/" + id
  );
  const data = await response.json();
  if (!response) {
    return undefined;
  }
  if (!response) {
    notFound();
  }

  return data;
}

const DetailComponent = async ({ id }: any) => {
  // const searchParams = useSearchParams();

  // Lấy giá trị của tham số `c` từ URL
  // const categoryId: any = searchParams.get("c");

  // Fetch dữ liệu từ server
  const getOneProductDetail: any = await fetchProduct(id);
  // const productByCategory = await fetchProductsCategory(categoryId);
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

  return (
    // <div className="flex justify-center mt-4 gap-10">
    //   <div className="div-container">
    //     {getOneProductDetail ? (
    //       <>
    //
    //         <div className="server mt-4 rounded">
    //           <p
    //             className="text-white md:text-sm lg:text-base text-sm underline"
    //           >
    //             Chọn server:
    //           </p>
    //           {/* <div className="md:text-sm lg:text-base text-sm flex items-center justify-center gap-4 px-4 py-3">
    //             <MyButton
    //               disabled={getOneProductDetail.link !== "" ? false : true}
    //               onClick={() => {
    //                 setActiveLink("link1");
    //                 setLink(getOneProductDetail.link);
    //               }}
    //               className={`text-white cursor-pointer ${activeLink === "link1" ? "activeServer" : ""}`}
    //             >
    //               #S1
    //             </MyButton>
    //             <MyButton
    //               onClick={() => {
    //                 setActiveLink("server2");
    //                 setLink(getOneProductDetail.server2);
    //               }}
    //               disabled={getOneProductDetail.server2 ? false : true}
    //               className={`text-white cursor-pointer ${getOneProductDetail.server2 ? "" : ""} ${activeLink === "server2" ? "activeServer" : ""}`}
    //             >
    //               #S2
    //             </MyButton>
    //             <MyButton
    //               onClick={() => {
    //                 setActiveLink("dailyMotion");
    //                 setLink(decryptedText);
    //               }}
    //               disabled={getOneProductDetail.dailyMotionServer ? false : true}
    //               className={`text-white cursor-pointer ${getOneProductDetail.dailyMotionServer ? "" : ""} ${activeLink === "dailyMotion" ? "activeServer" : ""}`}
    //             >
    //               #S3
    //             </MyButton>
    //           </div> */}
    //         </div>

    //       </>
    //     ) : (
    //       <Spin size={"large"} />
    //     )}
    //   </div>
    // </div>
    <div className="bg-black text-white min-h-screen">
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
      <div className="bg-gray-800 p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
              Tập trước
            </button>
            <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
              Tập tiếp theo
            </button>
          </div>
          <div className="flex space-x-2">
            <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
              Mở rộng
            </button>
            <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
              Tắt đèn
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <div className="w-6 h-6 bg-red-500 rounded-sm flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h1 className="text-lg font-bold">
            Thiếu Niên Bạch Mã Túy Xuân Phong Tập 24 Vietsub
          </h1>
        </div>

        <div className="inline-block bg-gray-700 px-3 py-1 rounded mb-4">
          FULL HD
        </div>

        <div className="">
          {/* <SeriDetailProducts seriProducts={productByCategory} /> */}
        
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "hhanime3d",
            "hhanime3d tv",
            "Hoạt hình Anime 3d",
            "Hoạt hình Anime",
            "Thiếu Niên Bạch Mã Túy Xuân Phong",
            "Shao Nian Bai Ma Zui Chun Feng",
          ].map((tag, i) => (
            <span key={i} className="bg-gray-700 px-2 py-1 rounded text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailComponent;
