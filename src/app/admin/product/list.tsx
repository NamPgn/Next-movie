import React, { useMemo } from "react";
import { useAppSelector } from "../../../hook";
import ProductAdmin from "./page";

const DataProduct = () => {
  const { product, length }: any = useAppSelector(
    (state) => state.product.value
  );
  const isLoading: any = useAppSelector((state) => state.product.isLoading);
  const memoizedProduct = useMemo(() => product, [product]);
  const memoizedLength = useMemo(() => length, [length]);
  const memoizedIsLoading = useMemo(() => isLoading, [isLoading]);
  return (
    <>
      <ProductAdmin
        product={memoizedProduct}
        isLoading={memoizedIsLoading}
        length={memoizedLength}
      />
    </>
  );
};

export default DataProduct;