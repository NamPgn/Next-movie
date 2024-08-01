import { handleImage } from "@/app/lib/handleImage";
import Image from "next/image";
import React from "react";
interface ImageInterFace {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: any;
}
export default function MVImage({
  alt,
  src,
  width,
  height,
  className,
  ...rest
}: ImageInterFace) {
  
  return (
    <Image
      loading="lazy"
      src={src}
      className={className}
      alt={alt}
      width={width}
      height={height}
      {...rest}
    />
  );
}
