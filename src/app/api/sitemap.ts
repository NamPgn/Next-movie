// import { NextApiRequest, NextApiResponse } from "next";
// import { fetchCategorys } from "../sevices/categorySevices";
// import { fetchProducts } from "../sevices/productsSevices";
// import { NextResponse } from "next/server";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const dataCategory = (await fetchCategorys(0)) || [];
//   const dataProducts = (await fetchProducts(0)) || [];
//   // Render dữ liệu sản phẩm
//   const renderDataProducts = dataCategory?.data?.map((item: any) => {
//     return {
//       loc: `https://tromphim.site/d/${item.slug}`,
//       lastmod: new Date().toISOString(),
//     };
//   });
//   // Tạo sitemap từ các route
//   const sitemap = `
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//       ${renderDataProducts
//         .map(
//           (item: any) => `
//         <url>
//           <loc>${item.loc}</loc>
//           <lastmod>${item.lastmod}</lastmod>
//         </url>
//       `
//         )
//         .join("")}
//     </urlset>
//   `;

//   return new NextResponse(sitemap, {
//     headers: {
//       "Content-Type": "application/xml",
//     },
//   });
// }
