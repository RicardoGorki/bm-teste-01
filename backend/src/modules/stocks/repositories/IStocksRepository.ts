import { Stocks } from "../entities/Stocks";

interface ICreateStocksDTO {
  investment?: number;
  acquisition_price?: number;
  quantity?: number;
  acquisition?: Date;
  sale?: Date;
  sale_price?: number;
  profit?: number;
  status?: "bought" | "sold"
}

interface IStocksRepository {
  create({
    investment,
    acquisition_price,
    quantity,
    acquisition,
    status
  }: ICreateStocksDTO): Promise<Stocks| void>;

  update(id: string, {
    sale,
    sale_price,
    profit,
    status
  }: ICreateStocksDTO): Promise<Stocks|void>
  findById(id: string): Promise<Stocks>
  findOne(): Promise<Stocks>
  list(): Promise<Stocks[]>
}

export { ICreateStocksDTO, IStocksRepository }
