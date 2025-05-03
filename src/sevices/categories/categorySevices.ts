import { Icategory } from "@/interfaces/category";
import { notFound } from "next/navigation";
interface FetchCategoriesResult {
  data: Icategory[];
  error?: string;
}

export async function fetchCategories(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/category/` + id,
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    if (!response.ok) {
      notFound();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching category:', error);
    return { data: null, error: "Failed to fetch category" };
  }
}

export async function fetchCategorys(page: number) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/categorys?page=` + page,
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      notFound();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return { data: [], error: "Failed to fetch categories" };
  }
}

export async function fetchCategorySitemap() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/categorys`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );
    if (!response.ok) {
      notFound();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching category sitemap:', error);
    return { data: [], error: "Failed to fetch category sitemap" };
  }
}
