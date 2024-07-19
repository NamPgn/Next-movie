import React from "react";
import { useSWRWithAxios } from "../../hook/Swr";

import { useAppSelector } from "../../hook";
import { user$ } from "../../redux/selectors";
import { urlSwr } from "@/app/function";

const AdminPage = () => {
  const states = useAppSelector(user$);
  const { data: item } = useSWRWithAxios(urlSwr + "/most-watched-episodes");
  const { data: rating } = useSWRWithAxios(urlSwr + "/rating/stats");
  const config = {
    data: item.data,
    xField: "seri",
    yField: "view",
    point: {
      shapeField: "square",
      sizeField: 4,
    },
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    style: {
      lineWidth: 2,
    },
  };

  return <></>;
};

export default AdminPage;
