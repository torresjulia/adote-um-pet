import express, { Request, Response } from "express";
import { PetController } from "../controllers/petController";

const router = express.Router();
const controller = new PetController();

router.get("/", async (req: Request, res: Response) => {
  await controller.getAllPets(req, res);
});

router.get("/:id", async (req: Request, res: Response) => {
  await controller.getPetById(req, res);
});

router.post("/", async (req: Request, res: Response) => {
  await controller.createPet(req, res);
});

router.put("/:id", async (req: Request, res: Response) => {
  await controller.updatePet(req, res);
});

router.delete("/:id", async (req: Request, res: Response) => {
  await controller.deletePet(req, res);
});

export default router;
