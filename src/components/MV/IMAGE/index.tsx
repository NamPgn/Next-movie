import React from "react";

type ImageInterface = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  objectFit?: string;
  title?: string;
};

export default function MVImage({
  src,
  alt,
  width,
  height,
  className,
  objectFit = "cover",
  title,
  ...rest
}: ImageInterface) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      width={width}
      height={height}
      title={title}
      className={className}
      style={{ objectFit:'cover' }}
      {...rest}
    />
  );
}
