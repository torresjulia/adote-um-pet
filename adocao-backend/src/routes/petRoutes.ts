import express, { Request, Response } from "express";
import { PetController } from "../controllers/petController";
import { verifyToken } from "../middlewares/verifyTokens";
import { isAdmin } from "../middlewares/isAdmin";

const router = express.Router();
const controller = new PetController();

// Apenas precisa estar logado
router.get("/", verifyToken, async (req: Request, res: Response) => {
  await controller.getAllPets(req, res);
});

router.get("/:id", verifyToken, async (req: Request, res: Response) => {
  await controller.getPetById(req, res);
});

// Precisa estar logado E ser admin
router.post("/", verifyToken, isAdmin, async (req: Request, res: Response) => {
  await controller.createPet(req, res);
});

router.put(
  "/:id",
  verifyToken,
  isAdmin,
  async (req: Request, res: Response) => {
    await controller.updatePet(req, res);
  }
);

router.delete(
  "/:id",
  verifyToken,
  isAdmin,
  async (req: Request, res: Response) => {
    await controller.deletePet(req, res);
  }
);

export default router;
