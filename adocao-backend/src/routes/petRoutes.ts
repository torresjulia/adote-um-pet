import express from 'express';
import { getAllPets } from '../controllers/petController';

const router = express.Router(); 

router.get('/', getAllPets);

export default router;