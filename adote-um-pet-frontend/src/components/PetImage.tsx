import React, { useState } from "react";

interface PetImageProps {
  src: string;
  alt: string;
  className?: string;
}

const PetImage: React.FC<PetImageProps> = ({ src, alt, className = "" }) => {
  const [error, setError] = useState(false);

  const fallbackImage =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='500' viewBox='0 0 24 24' fill='none' stroke='%23CBD5E0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'/%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'/%3E%3Cpolyline points='21 15 16 10 5 21'/%3E%3C/svg%3E";

  return (
    <img
      src={error ? fallbackImage : src}
      alt={alt}
      className={`object-cover ${className}`}
      onError={() => setError(true)}
    />
  );
};

export default PetImage;
