import Image from "next/image";
import React from "react";
import MVLink from "../../Location/Link";

export default function Header() {
  return (
    <div>
      <div className="headerContent bg-[#000]">
        <div className="headerItem">
          <div className="headerLogo flex items-center justify-center">
            <MVLink to={"/"}>
              <Image
                src={"https://hhanime3d.com/public/uploads/logo_anime.webp"}
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
