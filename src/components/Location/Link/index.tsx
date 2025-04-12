"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AnchorHTMLAttributes, ReactNode } from "react";

type LinkType = {
  to: string;
  children: ReactNode;
  prefetch?: boolean;
};

const MVLink = ({
  to,
  children,
  prefetch = false,
  ...rest
}: LinkType & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const router = useRouter();
  const [lastOpened, setLastOpened] = useState<number | null>(null);
  const redirectLink = "https://play.xoc88.fun?code=86178";
  const delay = 120000; // 15 giây

  useEffect(() => {
    const storedTime = localStorage.getItem("lastOpened");
    if (storedTime) {
      setLastOpened(parseInt(storedTime, 10));
    }
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const now = Date.now();
    const lastOpenTime = lastOpened || 0;

    if (now - lastOpenTime >= delay) {
      window.open(redirectLink, "_blank"); // Mở cửa sổ mới
      setLastOpened(now);
      localStorage.setItem("lastOpened", now.toString());
    }

    // Chuyển hướng trang chính bằng Next.js router.push()
    router.push(to);
  };

  return (
    <Link href={to} prefetch={prefetch} {...rest} >
      {children}
    </Link>
  );
};

export default MVLink;
