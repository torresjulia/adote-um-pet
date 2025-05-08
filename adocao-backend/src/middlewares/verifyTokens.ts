import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const secret = "minha_chave_secreta"; //colocar em uma variável de ambiente

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token não fornecido." });
  }

  const token = authHeader.split(" ")[1]; // Espera o formato "Bearer <token>"

  try {
    const decoded = jwt.verify(token, secret);
    (req as any).user = decoded; // Guarda os dados do token para uso posterior
    next();
  } catch (err) {
    return res.status(403).json({ message: "Token inválido ou expirado" });
  }
};
