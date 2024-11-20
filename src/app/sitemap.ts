import type { MetadataRoute } from "next";
import { fetchCategorySitemap } from "./sevices/categorySevices";
const generateSitemapXML = async () => {
  const categorys: any = await fetchCategorySitemap(); 

  const sitemap: any[] = [];

  categorys?.data?.map((item: any) => {
    sitemap.push({
      url: `${process.env.NEXT_PUBLIC_URL}/q/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    });

    item.products.map((product: any) => {
      sitemap.push({
        url: `${process.env.NEXT_PUBLIC_URL}/d/${product?.slug}`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.8,
      });
    });
  });

  return sitemap;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const data = await generateSitemapXML();
    return data;
  } catch (error) {
    return [];
  }
}
