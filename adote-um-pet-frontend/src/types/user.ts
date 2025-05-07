export interface User {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  tipo: "adotante" | "doador";
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthResponse {
  user: User;
  token: string;
}
