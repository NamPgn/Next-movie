import React from "react";
import { useSWRWithAxios } from "../../../../../hook/Swr";
import { urlSwr } from "../../../../function";

import MVTypeDisplay from "../../component";
import { useParams } from "next/navigation";
import { Loader, MessageErr, NotUpdate } from "@/app/components/Message/Notification";
import MVGridCategory from "@/app/components/Grid/component";

const ListType = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useSWRWithAxios(
    urlSwr + `/categorymain/${id}`
  );

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <MessageErr />;
  }
  const datas = [...data.category, ...data.products];
  return (
    <MVTypeDisplay
      data={data}
      children={
        datas.length ? (
          <MVGridCategory type="category" gutter={[16, 16]} child={datas} />
        ) : (
          <NotUpdate />
        )
      }
    />
  );
};

export default ListType;
