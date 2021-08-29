import { inject, injectable } from "tsyringe";

import { Stocks } from "../../entities/Stocks";

import { IStocksRepository } from "../../repositories/IStocksRepository";

@injectable()
class UpdateStocksUseCase {
  constructor(
    @inject("StocksRepository")
    private stocksRepository: IStocksRepository
  ) {}

  async execute(id,{ sale, sale_price }): Promise<Stocks| void> {
    const stocks = await this.stocksRepository.findById(id)

    if(!stocks) throw new Error("Ação não Existe!")

    const amountProfit =  stocks.investment
    const amountSale =  sale_price*stocks.quantity

    if(amountProfit>amountSale) {
      throw new Error("Você não pode vender por essa merreca")
    }

    const profitTotal = amountSale-stocks.investment

    if (stocks.updated_at !== null) {
      throw new Error("Você já vendeu essa(s) ações")
    }

    await this.stocksRepository.update(id,{
      sale,
      sale_price,
      profit: profitTotal,
    })
    return stocks
}
}

export { UpdateStocksUseCase }
