import { notFound } from "next/navigation";

export async function fetchCategory(id: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/category/` + id);
  const data = await response.json();
  if (!response) {
    return undefined;
  }
  if (!response) {
    notFound();
  }
  return data;
}


export async function fetchCategorySeeMore(id: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/category/` + id);
  const data = await response.json();
  if (!response) {
    return undefined;
  }
  if (!response) {
    notFound();
  }

  return data;
}

