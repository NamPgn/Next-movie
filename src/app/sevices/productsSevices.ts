import { notFound } from "next/navigation";

export async function fetchProduct(id: string) {
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
  
export async function fetchProductsCategory() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/category/filters/`
  );
  const {data} = await response.json();

  if (!response) {
    return undefined;
  }
  if (!response) {
    notFound();
  }

  return data;
}