import Image from "next/image";
import React from "react";
interface MVImageProps {
  src: string;
  alt?: any;
  className?: string;
  children?: React.ReactNode;
  style?: any;
  title?: string;
}

const MVImage = ({ src, alt, className, style, title, ...rest }:MVImageProps) => {
  return (
    <div className={`relative ${className}`} >
      <Image
        loading="lazy"
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        title={title}
        {...rest}
      />
    </div>
  );
};

export default MVImage;
