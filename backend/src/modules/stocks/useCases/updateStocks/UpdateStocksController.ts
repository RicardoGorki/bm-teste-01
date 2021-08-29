import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateStocksUseCase } from "./UpdateStocksUseCase";

class UpdateStocksController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { sale, sale_price } = request.body;

    const updateStocksUseCase = container.resolve(UpdateStocksUseCase);

    await updateStocksUseCase.execute(id, {
      sale,
      sale_price,
    });
    return response.status(201).send();
  }
}

export { UpdateStocksController };
