import axios from "axios";

const API_URL = "http://localhost:3000";

export const fetchPets = async () => {
  try {
    const response = await axios.get(`${API_URL}/pets`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pets:", error);
    throw error;
  }
};

export const getPetById = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/pets/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pet por ID:", error);
    throw error;
  }
};
