import React, { ReactNode } from "react";

const Title = ({ children, icon }: { children: ReactNode; icon?: ReactNode }) => {
  return (
    <h3 className="text-white text-lg  pl-2 mb-2  my-3 font-sans font-semibold dark:text-gray-200 flex items-center gap-2">
      {icon && icon}
      {children}
    </h3>
  );
};

export default Title;
