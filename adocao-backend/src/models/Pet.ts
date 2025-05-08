import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

// export interface Pet {
//   id: number;
//   nome: string;
//   especie: string;
//   raca: string;
//   idade: number;
//   porte: string;
//   descricao: string;
//   foto: string;
//   status: "disponivel" | "adotado";
// }

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  especie: string;

  @Column()
  raca: string;

  @Column()
  idade: number;

  @Column()
  porte: string;

  @Column()
  descricao: string;

  @Column()
  foto: string;

  @Column({ type: "enum", enum: ["disponivel", "adotado"] })
  status: "disponivel" | "adotado";

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
