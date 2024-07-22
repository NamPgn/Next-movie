"use client";

import React, { useEffect, useState } from "react";
import { MyButton } from "../../components/MV/Button";
import MVTable from "../../components/MV/Table";
import MVLink from "../../components/Location/Link";
import { getTrailerUrl } from "@/sevices/trailer";
import { columnsTrailer } from "@/constant";
declare var Promise: any;
const indexTrailer = () => {
  const [trailer, setTrailer]: any = useState({});
  useEffect(() => {
    const getAlldata = async (): Promise<any> => {
      const { data } = await getTrailerUrl();
      setTrailer(data);
    };
    getAlldata();
  }, []);
  const data = {
    _id: trailer._id,
    url: trailer.url,
    action: (
      <span>
        <MVLink to={`/dashboard/trailerUrl/${trailer._id}`}>
          <MyButton type="primary" style={{ background: "#1677ff" }}>
            Edit
          </MyButton>
        </MVLink>
      </span>
    ),
  };
  return (
    <>
      <MVTable columns={columnsTrailer} dataSource={[data]} />
    </>
  );
};

export default indexTrailer;
