import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";
type LinkType = {
  to: string;
  children: ReactNode;
  prefetch: boolean;
};
const MVLink = ({
  to,
  children,
  prefetch,
  ...rest
}: LinkType & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link className="hover:cursor-pointer" href={to} {...rest} prefetch={prefetch}>
      {children}
    </Link>
  );
};

export default MVLink;
