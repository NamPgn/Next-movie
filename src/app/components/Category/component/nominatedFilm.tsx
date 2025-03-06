import React from "react";
import RecentlyUpdated from "../../RecentlyUpdated";
import { fetchCategoryNominated } from "@/app/sevices/productsSevices";

const NominatedFilm = async ({ slug }: any) => {
  const data: any = await fetchCategoryNominated(slug);

  return (
    <div className="p-3">
      <RecentlyUpdated data={data} title="Phim đề cử" loadmore="Xem Thêm" />
    </div>
  );
};

export default NominatedFilm;
