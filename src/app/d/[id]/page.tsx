import LazyLoadOtherComponents from "@/app/components/LazyOtherComponents";
import { Loading } from "@/app/components/Message/Notification";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const DetailComponent = dynamic(() => import("@/app/components/Main"), {
  loading: () => <Loading />,
});
const CategoryHomePage = dynamic(
  () => import("@/app/components/Category/component/home"),
  {
    loading: () => <Loading />,
  }
);
const DetailProduct = ({ params }: any) => {
  const { id } = params;
  return (
    <>
      <Suspense>
        <DetailComponent id={id} />
      </Suspense>
      <LazyLoadOtherComponents>
        <CategoryHomePage />
      </LazyLoadOtherComponents>
    </>
  );
};

export default DetailProduct;
