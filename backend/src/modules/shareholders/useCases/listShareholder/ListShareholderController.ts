import {Request, Response} from "express"
import { container } from "tsyringe"

import { ListShareholderUseCase } from "./ListShareholderUseCase"

class ListShareholderController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listShareholderUseCase = container.resolve(ListShareholderUseCase)
    const all = await listShareholderUseCase.execute()

    return response.json(all)
  }
}

export { ListShareholderController }
