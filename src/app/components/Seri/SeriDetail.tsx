import React from "react";
import MVLink from "../Location/Link";

const SeriDetailProducts = ({ seriProducts }: any) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-2">
        {seriProducts &&
          seriProducts.map((item: any, index: any) =>
            item.isApproved ? (
              <MVLink to={"/d/" + item._id + `?c=${item.category}`}>
                <button className={`py-1 rounded text-center`}>
                  {item.seri ? "Tập " + item.seri : ""}
                </button>
              </MVLink>
            ) : null
          )}
      </div>
    </>
  );
};

export default SeriDetailProducts;
