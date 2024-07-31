import Link from "next/link";

const MVLink = ({ to, children, ...rest }:any) => {
  return (
    <Link href={to} {...rest} className="link">
      {children}
    </Link>
  );
};

export default MVLink;
