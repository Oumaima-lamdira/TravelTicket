import Image from "next/image";
import type { FC } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  loading?: "eager" | "lazy";
  onClick?: () => void;
}

const LazyImage: FC<LazyImageProps> = ({ src, alt, width, height, loading = "lazy", onClick }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      onClick={onClick}
      className="cursor-pointer"
    />
  );
};

export default LazyImage;
