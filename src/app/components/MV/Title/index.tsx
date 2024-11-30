import React, { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <h1
      aria-label={`${children}`}
      className="text-orange-500 my-4 text-xl font-bold uppercase relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-[2px] after:bg-orange-500"
    >
      {children}
    </h1>
  );
};

export default Title;
