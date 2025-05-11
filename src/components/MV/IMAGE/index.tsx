import React from "react";

type ImageInterface = {
  src: any;
  alt: any;
  width?: any;
  height?: any;
  className?: any;
  objectFit?: any;
  title?: any;
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
