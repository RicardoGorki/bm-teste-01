import {Request, Response} from "express"
import { container } from "tsyringe"

import { ListStocksUseCase } from "./ListStocksUseCase"

class ListStocksController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listStocksUseCase = container.resolve(ListStocksUseCase)
    const all = await listStocksUseCase.execute()

    return response.json(all)
  }
}

export { ListStocksController }
