import { Request, Response } from "express";
import petsData from "../db.json";

interface Pet {
  id: number;
  nome: string;
  especie: string;
  raca: string;
  idade: number;
  porte: string;
  descricao: string;
  foto: string;
  status: string;
}

export class PetController {
  // Código original
  // private pets: Pet[] = [];
  // private nextId = 1;

  // Mock para testes no frontend
  private pets: Pet[] = petsData;
  private nextId = Math.max(...this.pets.map((pet) => pet.id)) + 1;

  async getAllPets(req: Request, res: Response) {
    try {
      res.json(this.pets);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar pets", error });
    }
  }

  async getPetById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const pet = this.pets.find((p) => p.id === id);

      if (!pet) {
        return res.status(404).json({ message: "Pet não encontrado" });
      }

      res.json(pet);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar pet", error });
    }
  }

  async createPet(req: Request, res: Response) {
    try {
      console.log("Recebendo requisição para criar pet:", req.body);
      const newPet: Pet = {
        id: this.nextId++,
        ...req.body,
      };
      this.pets.push(newPet);
      console.log("Pet criado com sucesso:", newPet);
      res.status(201).json(newPet);
    } catch (error) {
      console.error("Erro ao criar pet:", error);
      res.status(500).json({ message: "Erro ao criar pet", error });
    }
  }

  async updatePet(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const index = this.pets.findIndex((p) => p.id === id);

      if (index === -1) {
        return res.status(404).json({ message: "Pet não encontrado" });
      }

      this.pets[index] = { ...this.pets[index], ...req.body };
      res.json(this.pets[index]);
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar pet", error });
    }
  }

  async deletePet(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const index = this.pets.findIndex((p) => p.id === id);

      if (index === -1) {
        return res.status(404).json({ message: "Pet não encontrado" });
      }

      this.pets.splice(index, 1);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Erro ao deletar pet", error });
    }
  }
}
