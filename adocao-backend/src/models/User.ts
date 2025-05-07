export interface User {
  id: number;
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  endereco: string;
  tipo: "adotante" | "doador";
  createdAt: Date;
  updatedAt: Date;
}
