import { notFound } from "next/navigation";
import "./style.css"; // Nhúng tệp CSS
import { fetchProduct } from "@/app/sevices/productsSevices";
import ShowDescriptions from "@/app/components/ShowContent/showDescriptions";
import { Metadata, ResolvingMetadata } from "next";
import SeriDetailProducts from "@/app/components/Seri/SeriDetail";
import VideoPlayer from "../component/VideoPlayer";
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
    title: `${res.category.name} - Tập ${res.seri} | Xem Phim Hoạt Hình Trung Quốc HD`,
    description: res.category.des,
    openGraph: {
      url: `https://hoathinhtrungquoc.site/${id}`,
      images: [
        {
          url:res.category.linkImg,
          secureUrl:res.category.linkImg,
          width: 800,
          height: 600,
        }
      ],
    },
  };
}

const DetailWatched = async ({
  params,
}: {
  params: { id: string; c: string };
}) => {
  // Fetch dữ liệu từ server
  const getOneProductDetail = await fetchProduct(params.id);
  if (!getOneProductDetail) {
    notFound(); // Trả về lỗi 404 nếu không tìm thấy dữ liệu
  }
  return (
    <div className="text-white">
      <div className="flex">
        <div>
          <VideoPlayer getOneProductDetail={getOneProductDetail} />
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
