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
    title:
      res.category?.isMovie == "drama"
        ? res?.category?.name + " Tập " + res?.seri
        : res?.category?.name,
    description: res?.category?.des,
    openGraph: {
      images: res?.category?.linkImg,
      type: "video.episode",
      url: `https://hoathinhtrungquoc.site/d/${res?.category?.slug}-episode-${res?.seri}`,
    },
  };
}

const DetailWatched = async ({
  params,
}: {
  params: { id: string; c: string };
}) => {
  const getOneProductDetail = await fetchProduct(params.id);

  if (!getOneProductDetail) {
    notFound();
  }
  return (
    <div className="text-white">
      <div className="flex">
        <div className="w-full">
          <VideoPlayer getOneProductDetail={getOneProductDetail} />
          <SeriDetailProducts
            productId={getOneProductDetail._id}
            seriProducts={getOneProductDetail?.category?.products}
            name={getOneProductDetail.name}
            isMovie={getOneProductDetail?.category?.isMovie}
          />
          <ShowDescriptions content={getOneProductDetail?.category?.des} />
        </div>
      </div>
    </div>
  );
};

export default DetailWatched;
