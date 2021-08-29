import { getRepository, Repository } from "typeorm";
import { Stocks } from "../../entities/Stocks";

import { ICreateStocksDTO, IStocksRepository } from "../IStocksRepository";

class StocksRepository implements IStocksRepository {
  private repository: Repository<Stocks>;

  constructor() {
    this.repository = getRepository(Stocks);
  }

  async create({
    investment,
    acquisition_price,
    quantity,
  }: ICreateStocksDTO): Promise<Stocks | void> {


    const stocks = this.repository.create({
      investment,
      acquisition_price,
      quantity,
      acquisition: new Date(),
      status: "bought",
    });

    await this.repository.save(stocks);
  }

  async update(
    id,
    { sale, sale_price,profit}: ICreateStocksDTO
  ): Promise<Stocks|void> {
    await this.repository.findOne(id);

    const stocks = await this.repository.update(id, {
      sale,
      sale_price,
      profit,
      status: "sold",
      updated_at: new Date(),
    });

    await this.repository.save({id, stocks});
  }

  async findById(id: string): Promise<Stocks> {
    const stocks = await this.repository.findOne({ id });
    return stocks;
  }

  async findOne(): Promise<Stocks> {
   const checkStocks = await this.repository.findOne({where: {status: "bought"}});
    return checkStocks
  }

  async list(): Promise<Stocks[]> {
    const stocks = await this.repository.find();
    return stocks;
  }
}

export { StocksRepository };
