import { Response, Request} from "express"
import { container} from "tsyringe"
import {CreateStocksUseCase } from "./CreateStocksUseCase"

class CreateStocksController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { investment, acquisition_price } = request.body

    const stocksAmount = investment / acquisition_price

    if (investment <= acquisition_price) {
      throw new Error("Você precisa de dinheiro para comprar ações")
    }

    if (stocksAmount <= 0) {
      throw new Error("Favor inserir um valor positivo!")
    }

    const createStocksUseCase = container.resolve(CreateStocksUseCase)

    await createStocksUseCase.execute({
      investment,
      acquisition_price,
      quantity: stocksAmount,
      acquisition: new Date(),
      status: "bought",
      })

    return response.status(201).send()

  }
}

export { CreateStocksController }
