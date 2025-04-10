import React from "react";

interface PetCardProps {
  name: string;
  imageUrl: string;
  description: string;
}

const PetCard: React.FC<PetCardProps> = ({ name, imageUrl, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default PetCard;
