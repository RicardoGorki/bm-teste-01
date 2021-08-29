import { inject, injectable } from "tsyringe";
import { Stocks } from "../../entities/Stocks";
import { IStocksRepository } from "../../repositories/IStocksRepository";

interface IRequest {
  investment: number;
  acquisition_price: number;
  acquisition: Date;
  quantity: number;
  status: "bought";
}

@injectable()
class CreateStocksUseCase {
  constructor(
    @inject("StocksRepository")
    private stocksRepository: IStocksRepository
  ) {}

  async execute({
    investment,
    acquisition_price,
    acquisition,
    quantity,
    status,
  }: IRequest): Promise<Stocks | void> {
    const checkStocks = await this.stocksRepository.findOne();

    if (checkStocks) {
      throw new Error("Você precisa vender suas ações primeiro");
    }

    this.stocksRepository.create({
      investment,
      acquisition,
      acquisition_price,
      quantity,
      status,
    });
  }
}

export { CreateStocksUseCase };
