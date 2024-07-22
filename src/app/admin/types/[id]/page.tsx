import React from "react";
import { Button, Image } from "antd";
import { urlSwr } from "@/app/function";
import { useSWRWithAxios } from "@/hook/Swr";
import { deleteCatemainByProduct } from "@/sevices/catemain";
import MVLink from "@/app/components/Location/Link";
import MVTitle from "@/app/components/MV/Title";
import MVTable from "@/app/components/MV/Table";
import { columnsCatemainProduct } from "@/constant";

const CatemainProduct = ({params}:any) => {
  const { id } = params;
  const { data: datas } = useSWRWithAxios(urlSwr + "/categorymain/" + id);

  const handleclick = async (id: any, CatemainId: any) => {
    const body = {
      CatemainId: CatemainId,
    };
    await deleteCatemainByProduct(id, body);
  };
  const data =
    datas.products &&
    datas.products.map((item:any, index:number) => ({
      key: index,
      stt: index + 1,
      name: item.name,
      image: (
        <Image style={{ height: "200px", width: "150px" }} src={item.image} />
      ),
      createdAt: item.createdAt,
      action: (
        <span>
          <MVLink to={`/dashboard/trailerUrl/${item._id}`}>
            <Button style={{ background: "rgb(22, 119, 255)" }}>Edit</Button>
          </MVLink>
          <Button
            danger
            className="ml-2"
            onClick={() => handleclick(item._id, item.categorymain)}
          >
            Del
          </Button>
        </span>
      ),
    }));
  return (
    <>
      <MVTitle level={5}>{datas.name}</MVTitle>
      <MVTable columns={columnsCatemainProduct} dataSource={data} />
    </>
  );
};

export default CatemainProduct;
