import { Icategory } from "@/interfaces/category";
import axios from "axios";
import { notFound } from "next/navigation";
interface FetchCategoriesResult {
  data: Icategory[];
  error?: string;
}
export async function fetchCategorysRecentllyUpdated(): Promise<FetchCategoriesResult> {
  try {
    const response: any = await (
      await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/category/latest/next`,
        {
          method: "GET",
          cache: "no-cache",
        }
      )
    ).json();
    if (!response) {
      notFound();
    }
    return response;
  } catch (error) {
    return { data: [], error: "Failed to fetch categories" };
  }
}

export async function fetchCategories(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/category/` + id,
    {
      method: "GET",
      cache: "no-cache",
    }
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

export async function fetchCategorySeeMore(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/category/` + id,
    {
      method: "GET",
      cache: "no-cache",
    }
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

export async function fetchCategorys(page: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/categorys?page=` + page,
    {
      method: "GET",
    }
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

export async function fetchWeeks(page: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/categorys?page=` + page,
    {
      method: "GET",
    }
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

export async function fetchCategorySitemap() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/categorys`,
    {
      method: "GET",
      cache: "no-cache",
    }
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
