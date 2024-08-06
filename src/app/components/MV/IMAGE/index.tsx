import Image from "next/image";
import React from "react";
type ImageInterFace = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: any;
  objectFit?: string;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
};
export default function MVImage({
  alt,
  src,
  width,
  height,
  className,
  objectFit,
  placeholder,
  blurDataURL,
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
      objectFit={objectFit}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      {...rest}
    />
  );
}
