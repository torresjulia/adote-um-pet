// src/pages/PetDetails.tsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPetById } from "../services/petService";
import { Pet } from "../types/pet";

const PetDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [pet, setPet] = useState<Pet | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPet = async () => {
      if (!id) return;

      try {
        setLoading(true);
        const data = await getPetById(parseInt(id));
        setPet(data);
      } catch (error) {
        console.error("Erro ao buscar pet:", error);
        setError(
          "Não foi possível carregar os detalhes do pet. Tente novamente mais tarde."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPet();
  }, [id]);

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

  if (!pet) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div
          className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Atenção!</strong>
          <span className="block sm:inline"> Pet não encontrado.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-block mb-6 text-blue-500 hover:text-blue-700"
      >
        ← Voltar para lista de pets
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={pet.foto}
              alt={pet.nome}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{pet.nome}</h1>

            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">Informações</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600">Espécie</p>
                    <p className="font-medium">{pet.especie}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Raça</p>
                    <p className="font-medium">{pet.raca}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Idade</p>
                    <p className="font-medium">{pet.idade} anos</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Porte</p>
                    <p className="font-medium">{pet.porte}</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Descrição</h2>
                <p className="text-gray-700">{pet.descricao}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Status</h2>
                <p className="text-gray-700 capitalize">{pet.status}</p>
              </div>

              <div className="pt-4">
                <button className="w-full bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300">
                  Entrar em Contato para Adoção
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
