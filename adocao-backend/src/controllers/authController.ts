import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

const JWT_SECRET = process.env.JWT_SECRET || "sua_chave_secreta";

export class AuthController {
  private users: User[] = [];
  private nextId = 1;

  async register(req: Request, res: Response) {
    try {
      const { nome, email, senha, telefone, endereco, tipo } = req.body;

      // Verifica se o email já está em uso
      const existingUser = this.users.find((user) => user.email === email);
      if (existingUser) {
        return res.status(400).json({ message: "Email já está em uso" });
      }

      // Hash da senha
      const hashedPassword = await bcrypt.hash(senha, 10);

      // Cria o novo usuário
      const newUser: User = {
        id: this.nextId++,
        nome,
        email,
        senha: hashedPassword,
        telefone,
        endereco,
        tipo,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      this.users.push(newUser);

      // Gera o token JWT
      const token = jwt.sign(
        { userId: newUser.id, email: newUser.email, tipo: newUser.tipo },
        JWT_SECRET,
        { expiresIn: "24h" }
      );

      // Retorna o usuário (sem a senha) e o token
      const { senha: _, ...userWithoutPassword } = newUser;
      res.status(201).json({ user: userWithoutPassword, token });
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      res.status(500).json({ message: "Erro ao registrar usuário", error });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, senha } = req.body;

      // Busca o usuário pelo email
      const user = this.users.find((user) => user.email === email);
      if (!user) {
        return res.status(401).json({ message: "Email ou senha inválidos" });
      }

      // Verifica a senha
      const validPassword = await bcrypt.compare(senha, user.senha);
      if (!validPassword) {
        return res.status(401).json({ message: "Email ou senha inválidos" });
      }

      // Gera o token JWT
      const token = jwt.sign(
        { userId: user.id, email: user.email, tipo: user.tipo },
        JWT_SECRET,
        { expiresIn: "24h" }
      );

      // Retorna o usuário (sem a senha) e o token
      const { senha: _, ...userWithoutPassword } = user;
      res.json({ user: userWithoutPassword, token });
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      res.status(500).json({ message: "Erro ao fazer login", error });
    }
  }
}
