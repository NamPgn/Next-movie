import CategoryHomePage from "@/components/Category/component/home";
import LazyLoadOtherComponents from "@/components/LazyOtherComponents";
import DetailComponent from "@/components/Main";
import { Suspense } from "react";

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
