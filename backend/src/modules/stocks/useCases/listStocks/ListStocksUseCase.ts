import { inject, injectable } from "tsyringe";

import { Stocks } from "../../entities/Stocks";

import { IStocksRepository } from "../../repositories/IStocksRepository";

@injectable()
class ListStocksUseCase {
  constructor(
    @inject("StocksRepository")
    private stocksRepository: IStocksRepository
  ) {}

  async execute(): Promise<Stocks[]> {
    const stocks = await this.stocksRepository.list()

    return stocks
  }
}

export { ListStocksUseCase }
