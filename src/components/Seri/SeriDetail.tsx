import React, { memo } from "react";
import { BtnStyled } from "./styles";
import MVRow from "../MV/Grid";
import MVCol from "../MV/Grid/Col";
import MVLink from "../Location/Link";

const SeriDetailProducts = memo(({ seriProduct }: any) => {
  return (
    <MVRow gutter={14} items="center">
      {seriProduct.map((item: any, index: any) =>
        item.isApproved == true ? (
          <MVCol
            xl={3}
            lg={3}
            md={4}
            sm={4}
            xs={6}
            key={index}
            className="mt-2"
          >
            <MVLink
              className={({ isActive, isPending }:any) =>
                isActive ? "activeSeri" : ""
              }
              to={"/d/" + item._id + `?c=${item.category}`}
            >
              <BtnStyled className={item.seri && "w-full"}>
                {item.seri && "Tập " + item.seri}
              </BtnStyled>
            </MVLink>
          </MVCol>
        ) : (
          ""
        )
      )}
    </MVRow>
  );
});

export default SeriDetailProducts;
