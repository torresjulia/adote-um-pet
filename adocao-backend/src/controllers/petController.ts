import { Request, Response } from 'express'; 
import pets from '../db.json';
import { Pet } from '../models/Pet'; 

export const getAllPets = (req: Request, res: Response): void => {
    res.json(pets as Pet[]);
}; 
