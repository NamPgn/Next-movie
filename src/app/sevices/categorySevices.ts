import { Icategory } from "@/interfaces/category";
import { notFound } from "next/navigation";

export async function fetchCategories(page: number): Promise<Icategory[]> {
  const response: any = await (
    await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/categorys?page=` + page
    )
  ).json(); // Thay đổi URL theo API của bạn

  if (!response || !response.data) {
    throw new Error("Failed to fetch");
  }
  return response.data;
}

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

