import Link from "next/link";

const MVLink = ({ to, children, ...rest }:any) => {
  return (
    <Link href={to} {...rest} >
      {children}
    </Link>
  );
};

export default MVLink;
