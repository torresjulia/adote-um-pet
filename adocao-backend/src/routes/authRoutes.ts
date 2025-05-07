import express from "express";
import { AuthController } from "../controllers/authController";

const router = express.Router();
const controller = new AuthController();

router.post("/register", async (req, res) => {
  await controller.register(req, res);
});

router.post("/login", async (req, res) => {
  await controller.login(req, res);
});

export default router;
