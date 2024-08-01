import React from "react";
import MVLink from "../Location/Link";

const SeriDetailProducts = ({ seriProducts }: any) => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 ">
        {seriProducts &&
          seriProducts.map((items:any) =>
            items.isApproved ? (
              <MVLink
                to={`/d/${items._id}?c=${items.category}`}
                key={items._id}
                className="block"
              >
                <div className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-300 ease-in-out shadow-md overflow-hidden">
                  <div className="p-3 text-center">
                    {items.seri ? `Tập ${items.seri}` : ""}
                  </div>
                </div>
              </MVLink>
            ) : null
          )}
      </div>
    </>
  );
};

export default SeriDetailProducts;
