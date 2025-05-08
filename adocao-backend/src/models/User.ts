import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

// export interface User {
//   id: number;
//   nome: string;
//   email: string;
//   senha: string;
//   telefone: string;
//   endereco: string;
//   tipo: "adotante" | "doador";
//   createdAt: Date;
//   updatedAt: Date;
// }

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column()
  senha: string;

  @Column()
  telefone: string;

  @Column()
  endereco: string;

  @Column({ type: "enum", enum: ["adotante", "doador"] })
  tipo: "adotante" | "doador";

  @Column({ default: "user" })
  role: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
