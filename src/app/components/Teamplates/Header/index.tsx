import React from "react";
import MVLink from "../../Location/Link";
import MVImage from "../../MV/IMAGE";

export default function Header() {
  return (
    <div>
      <div className="headerContent bg-[#000]">
        <div className="headerItem">
          <div className="headerLogo flex items-center justify-center">
            <MVLink to={"/"}>
              <MVImage
                src={""}
                width={200}
                height={200}
                alt="dptk"
                className="w-[200px] h-[50px]"
              />
            </MVLink>
          </div>
          <div className="headerSearch"></div>
        </div>
      </div>
    </div>
  );
}
