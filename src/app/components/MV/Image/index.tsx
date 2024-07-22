import Image from "next/image";
import React from "react";
interface MVImageProps {
  src: string;
  alt?: any;
  className?: string;
  children?: React.ReactNode;
  style?: any;
}
const MVImage: React.FC<MVImageProps> = ({
  src,
  alt,
  style,
  className,
  ...rest
}) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        // placeholder={}
        // removeWrapper={true}
        loading="lazy"
        src={src}
        style={style}
        alt={alt}
        {...rest}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default MVImage;
