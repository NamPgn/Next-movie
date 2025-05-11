import React from "react";


export default function MVImage({
  src,
  alt,
  width,
  height,
  className,
  objectFit = "cover",
  title,
  ...rest
}: any) {
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
