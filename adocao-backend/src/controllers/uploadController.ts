import { Request, Response } from "express";

export class uploadController {
  public async uploadPetImages(req: Request, res: Response): Promise<void> {
    try {
      if (!req.files || req.files.length === 0) {
        res
          .status(400)
          .json({ message: "Nenhum arquivo de imagem foi enviado" });
        return;
      }

      const petId = req.params.petId;
      const imagePaths = (req.files as Express.Multer.File[]).map(
        (file) => `/uploads/${petId}/${file.filename}`
      );

      // Aqui precisarei atualizar o modelo de Pet no banco de dados
      // para adicionar esses imagePaths ao pet com o ID 'petId'

      res
        .status(200)
        .json({ message: "Imagens enviadas com sucesso", imagePaths });
    } catch (error: any) {
      console.error("Erro ao fazer upload das imagens:", error);
      res.status(500).json({ message: "Erro ao enviar imagens", error });
    }
  }
}
