import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";
type LinkType = {
  to: string;
  children: ReactNode;
};
const MVLink = ({
  to,
  children,
  ...rest
}: LinkType & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link href={to} {...rest} prefetch={true}>
      {children}
    </Link>
  );
};

export default MVLink;
