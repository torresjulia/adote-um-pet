import express, { Request, Response } from "express";
import cors from "cors";
import petRoutes from "./routes/petRoutes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Log de requisições
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  next();
});

// Rota raiz
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Bem-vindo à API de Adoção de Pets! 🐾" });
});

// Rotas de pets
console.log("Registrando rotas de pets...");
app.use("/pets", petRoutes);

// Middleware de erro
app.use((err: any, req: Request, res: Response, next: any) => {
  console.error("Erro:", err);
  res
    .status(500)
    .json({ message: "Erro interno do servidor", error: err.message });
});

// Inicia o servidor
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
  console.log("Rotas disponíveis:");
  console.log("GET / - Rota raiz");
  console.log("GET /pets - Listar todos os pets");
  console.log("GET /pets/:id - Buscar pet por ID");
  console.log("POST /pets - Criar novo pet");
  console.log("PUT /pets/:id - Atualizar pet");
  console.log("DELETE /pets/:id - Deletar pet");
});
