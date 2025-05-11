// routes/uploadRoutes.ts
import express, { Request, Response, NextFunction } from "express";
import { uploadController } from "../controllers/uploadController";
import { verifyToken } from "../middlewares/verifyTokens";
import multer from "multer";
import path from "path";
import fs from "fs/promises";

const router = express.Router();
const controller = new uploadController();

const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    const petId = req.params.petId;
    const uploadDir = path.join(__dirname, "../../uploads", petId);
    await fs.mkdir(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});

const upload = multer({ storage: storage });

router.post(
  "/pets/:petId/images",
  verifyToken,
  upload.array("images", 5),
  (req: Request, res: Response, next: NextFunction) => {
    controller.uploadPetImages(req, res).catch(next); // Lida com possíveis erros na promise
  }
);

export default router;
