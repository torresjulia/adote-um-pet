import { Request, Response, NextFunction } from "express";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const user = (req as any).user;

  if (!user || user.role != "admin") {
    return res
      .status(403)
      .json({ message: "Acesso restrito a aministradores." });
  }

  next();
};
