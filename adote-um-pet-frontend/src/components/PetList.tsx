// src/components/PetList.tsx
import React, { useEffect, useState } from "react";
import { fetchPets } from "../services/petService";
import PetCard from "./PetCard";

interface Pet {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
}

const PetList: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    const getPets = async () => {
      try {
        const petsData = await fetchPets();
        setPets(petsData);
      } catch (error) {
        console.error("Erro ao buscar pets", error);
      }
    };

    getPets();
  }, []);

  return (
    <div className="flex flex-wrap -mx-4">
      {pets.map((pet) => (
        <div key={pet.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
          <PetCard
            name={pet.name}
            imageUrl={pet.imageUrl}
            description={pet.description}
          />
        </div>
      ))}
    </div>
  );
};

export default PetList;
