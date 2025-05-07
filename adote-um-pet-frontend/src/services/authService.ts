import axios from "axios";
import { AuthResponse } from "../types/user";

const API_URL = "http://localhost:3000";

export const register = async (userData: {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  endereco: string;
  tipo: "adotante" | "doador";
}): Promise<AuthResponse> => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Erro ao registrar:", error);
    throw error;
  }
};

export const login = async (credentials: {
  email: string;
  senha: string;
}): Promise<AuthResponse> => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
};
