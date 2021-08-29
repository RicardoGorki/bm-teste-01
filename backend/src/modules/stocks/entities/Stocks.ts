import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("stocks")
class Stocks {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  investment: number;

  @Column()
  acquisition_price: number;

  @CreateDateColumn()
  acquisition: Date;

  @Column()
  quantity: number;

  @CreateDateColumn()
  sale: Date;

  @Column()
  sale_price: number;

  @Column()
  profit: number;

  @Column()
  status: "bought" | "sold";

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Stocks };
