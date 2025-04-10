import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPets } from "../services/petService";
import { Pet } from "../types/pet";

const Home: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPets = async () => {
      try {
        setLoading(true);
        const petsData = await fetchPets();
        setPets(petsData);
      } catch (error) {
        console.error("Erro ao buscar pets:", error);
        setError(
          "Não foi possível carregar os pets. Tente novamente mais tarde."
        );
      } finally {
        setLoading(false);
      }
    };

    getPets();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Erro!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Pets Disponíveis para Adoção
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pets.map((pet) => (
          <Link
            to={`/pet/${pet.id}`}
            key={pet.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-48">
              <img
                src={pet.foto}
                alt={pet.nome}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{pet.nome}</h2>
              <div className="text-gray-600">
                <p className="mb-1">
                  <span className="font-medium">Espécie:</span> {pet.especie}
                </p>
                <p className="mb-1">
                  <span className="font-medium">Raça:</span> {pet.raca}
                </p>
                <p className="mb-1">
                  <span className="font-medium">Idade:</span> {pet.idade} anos
                </p>
                <p className="mb-1">
                  <span className="font-medium">Porte:</span> {pet.porte}
                </p>
              </div>
              <div className="mt-4">
                <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                  Ver Detalhes
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
